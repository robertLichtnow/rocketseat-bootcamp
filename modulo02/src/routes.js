import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego Fernandez',
    email: 'diego@rocketseat.com.br',
    password_hash: '1231231231223',
  });

  res.json(user);
});

export default routes;
