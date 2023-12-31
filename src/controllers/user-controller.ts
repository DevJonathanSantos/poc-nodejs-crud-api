import { Request, Response } from "express";
import { injectable, container } from 'tsyringe';
import { GetAllUser } from "../use-cases/user/getAllUser";
import { GetByIdUser } from "../use-cases/user/getByIdUser";
import { AddUser } from "../use-cases/user/addUser";
import { DeleteUser } from "../use-cases/user/deleteUser";
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