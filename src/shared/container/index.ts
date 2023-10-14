import { container } from "tsyringe";
import { IUserRepository } from "../../core/interfaces/repositories/userRepository";
import { UserRepository } from "../../infra/repositories/userRepository";


container.registerSingleton<IUserRepository>('UserRepository', UserRepository);