import { Router } from "express";
import { UserController } from "./controllers/user-controller";
import SendEmailService from "./services/sendEmailService";

const routes = Router();

routes.get('/user', new UserController().getAll);
routes.get('/user/:id', new UserController().getById);
routes.post('/user', new UserController().add);
routes.delete('/user/:id', new UserController().delete);

routes.post('/messages', async (req, res) => {
    const sendEmail = new SendEmailService();

    const response = await sendEmail.run();

    return res.json({ response: response });
});


export default routes;