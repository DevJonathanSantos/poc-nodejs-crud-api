import { Request, Response } from "express";
import { injectable, container } from 'tsyringe';
import { GetAllUser } from "../useCases/user/getAllUser";
import { GetByIdUser } from "../useCases/user/getByIdUser";
import { AddUser } from "../useCases/user/addUser";
import { DeleteUser } from "../useCases/user/deleteUser";
import { User } from "../domain/entities/user";

@injectable()
export class UserController {
    constructor(
    ) { }

    async getAll(req: Request, res: Response) {

        const users = await container.resolve(GetAllUser).handle();

        return res.json(users);
    }

    async getById(req: Request, res: Response) {

        const { id } = req.params;

        const users = await container.resolve(GetByIdUser).handle(id);

        return res.json(users);
    }

    async add(req: Request, res: Response) {

        const { firstName } = req.body;

        const users = await container.resolve(AddUser).handle(new User(firstName));

        return res.json(users);
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id;

        const users = await container.resolve(DeleteUser).handle(id);

        return res.json(users);
    }
}