// import { User } from "../../domain/entities/user";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/interfaces/repositories/userRepository";
import { DatabaseMemory } from "../database-memory";
export class UserRepository implements IUserRepository {

    private memory: DatabaseMemory;

    constructor() {
        this.memory = new DatabaseMemory();
    }

    async getAll(): Promise<User[] | undefined> {

        return this.memory.getAll();
    }

    async getById(id: string): Promise<User | undefined> {

        return this.memory.getById(id);
    }

    async add(user: User): Promise<User[] | undefined> {

        return this.memory.Add(user);
    }

    async delete(id: string): Promise<User[] | undefined> {

        return this.memory.delete(id);
    }
}
