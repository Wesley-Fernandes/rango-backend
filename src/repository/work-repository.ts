import database from "../config/database";
import type { WorkType } from "../schema/work";


export class WorkRepository{
    
    async createWork(data:Partial<WorkType>){
        return await database.work.create({data:{
            description: data.description as string,
            userID: data.userID as string,
            prevID: data.prevID as string,
            nextID: data?.nextID,
            finish: data?.finish,
            end: data.end? new Date(data.end):undefined,
            start: data?.start as Date
        }});
    }

    async existPermission(email:string){
        return await database.permission.findUnique({
            where: {email},
            select: {id: true},
        })
    }

    async updateWork(id:string, data:Partial<WorkType>, userID:string){
        return await database.work.update({
            where: {id,userID},
            data: data,
        });
    }

    async deleteWork(id:string){
        return await database.work.delete({where: {id}});
    }

    async getWork(id:string){
        return await database.work.findUnique({where: {id}});
    }

    async getWorks(grant:string, lower:string){
        return await database.work.findMany({
            where: {
                start: {
                    lte: new Date(grant),
                    gte: new Date(lower)
                }
            }
    });
    }

}