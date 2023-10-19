import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/interfaces/repositories/userRepository';
import { User } from '../../domain/entities/user';

@injectable()
export class AddUser {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) { }

    async handle(user: User) {
        return await this.userRepository.add(user);
    }
}