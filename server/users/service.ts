import UsersDao from './dao';
import User from "./dto";
import { CRUD } from "../common/interfaces/crud.interface";

class UsersService implements CRUD {
    async create(resource: User) {
        return UsersDao.addUser(resource);
    }

    async deleteById(resourceId: string) {
        return UsersDao.removeUserById(resourceId);
    };

    async list(limit?: number, page?: number) {
        return UsersDao.getUsers();
    };

    async patchById(resource: User) {
        return UsersDao.patchUserById(resource)
    };

    async readById(resourceId: string) {
        return UsersDao.getUserById(resourceId);
    };

    async updateById(resource: User) {
        return UsersDao.putUserById(resource);
    };

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();