import { User } from "../../entities/user";

export interface IUserRepository {
    getAll(): Promise<User[] | undefined>
    getById(id: string): Promise<User | undefined>
    add(user: User): Promise<User[] | undefined>
    delete(id: string): Promise<User[] | undefined>
}