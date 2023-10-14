import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../domain/interfaces/repositories/userRepository';

@injectable()
export class GetByIdUser {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) { }

    async handle(id: string) {
        return await this.userRepository.getById(id);
    }
}