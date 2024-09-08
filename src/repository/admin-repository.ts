import database from "../config/database";
import type { PermissionType } from "../schema/permission";


export class AdminRepository{
    
    async createPermission(data:PermissionType){
        return await database.permission.create({
            data: {
              email: data.email,
              role: data.role
            },
        });
    }

    async existPermission(email:string){
        return await database.permission.findUnique({
            where: {email},
            select: {id: true},
        })
    }

    async updatePermission(data:PermissionType){
        return await database.permission.update({
            where: {email: data.email},
            data: {role: data.role},
        });
    }

    async deletePermission(email:string){
        return await database.permission.delete({where: {email}});
    }

    async getPermission(email:string){
        return await database.permission.findUnique({where: {email}});
    }

}