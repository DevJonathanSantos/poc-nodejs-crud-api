import { User } from "../domain/entities/user";

export class DatabaseMemory {
    #users = [
        new User('Jonathahn'),
        new User('Miriane'),
        new User('Serena')
    ]

    getAll() {
        return this.#users
    }

    getById(id: string) {

        return this.#users.find(x => x.id == id);
    }

    Add(user: User) {
        if (this.#users.push(user))
            return this.#users;
    }

    delete(id: string) {
        console.log('id', id)

        return this.#users = this.#users.filter(x => x.id !== id);
    }
}