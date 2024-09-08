import database from "../config/database";
import { USER } from "../schema/user";


export class UserRepository{

    async havePermission(email: string){
        return await database.permission.findUnique({
            where: { email },
            select: { id: true },
        })
    }

    async createUser(user:USER){
        return await database.user.create({
            data: {
              email: user.email,
              password: user.password,
              username: user.username,
              birth: user.birth,
            },
        });
    }

    async existsEmail(email: string){
        return await database.user.findUnique({
            where: { email },
            select: { id: true },
        })
    }

    async find(email:string){
        return await database.user.findUnique({
            where: { email },
            select: { id: true, password: true },
        })
    }
}