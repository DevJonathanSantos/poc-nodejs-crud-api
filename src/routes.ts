import { Router } from "express";
import { UserController } from "./controllers/user-controller";

const routes = Router();

routes.get('/user', new UserController().getAll);
routes.get('/user/:id', new UserController().getById);
routes.post('/user', new UserController().add);
routes.delete('/user/:id', new UserController().delete);

export default routes;