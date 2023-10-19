import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/interfaces/repositories/userRepository';

@injectable()
export class GetAllUser {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) { }

    async handle() {
        return await this.userRepository.getAll();
    }
}