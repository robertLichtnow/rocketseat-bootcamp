const express = require("express");

let projects = [];

const server = express();

server.use(express.json());

const checkIfIdIsPresent = (req, res, next) => {
  const { id } = req.params;
  const project = projects.find(project => project.id == id);
  if (!project) {
    res.status(400).json({ error: "No project with the provided id" });
  }
  next();
};

server.post("/projects", (req, res) => {
  projects.push(req.body);
  res.json(req.body);
});

server.get("/projects", (req, res) => {
  res.json(projects);
});

server.put("/projects/:id", checkIfIdIsPresent, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.find(project => project.id == id);
  if (project) project.title = title;
  res.json(project);
});

server.delete("/projects/:id", checkIfIdIsPresent, (req, res) => {
  const { id } = req.params;

  projects = projects.filter(project => project.id != id);
  res.status(201).send();
});

server.post("/projects/:id/tasks", checkIfIdIsPresent, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects = projects.map(project => {
    if (project.id == id) {
      project.tasks = project.tasks ? [] : project.tasks;
      project.tasks.push(title);
    }
    return project;
  });
});

server.listen(3000, () => console.log("Listening on port 3000"));
