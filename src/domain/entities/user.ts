import { randomUUID } from "crypto";

export class User {
    id?: string;
    firstName?: string;
    lastName?: string;
    emailName?: string;
    password?: string;

    constructor(firstName: string) {
        this.firstName = firstName;
        this.id = randomUUID();
    }
}