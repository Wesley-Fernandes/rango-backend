import REPOSITORY from '../repository';
import type { Request, Response } from 'express';
import type { WorkType } from '../schema/work';
import { decode } from '../utils/criptografy';
import { getDatasParams } from '../utils/date';

export class Work {
  async createWork(req: Request, res: Response) {
    const props:Partial<WorkType> = req.body;
    
    await REPOSITORY.work.createWork(props);
    return res.status(201).json({ message: 'Trabalho agendado.' });
  }

  async getWork(req: Request, res: Response) {
    const {id} = req.params;

    if(!id){
      return res.status(401).json({ message: 'Forneça o ID do registro.' });
    }

    const work = await REPOSITORY.work.getWork(id);
    if(!work){
      return res.status(404).json({ message: 'Registro não existe.' });
    }
    return res.status(200).json(work);
  }

  async getWorks(req: Request, res: Response) {

    const {max, min} = await getDatasParams();

    console.log({max, min});

    const works = await REPOSITORY.work.getWorks(max, min);
    if(works.length < 1){
      return res.status(404).json({ message: 'Não foi encontrado registros.' });
    }
    return res.status(200).json(works);
  }

//http://localhost:2840/api/auth/work/schedule?month=january&year=2024
  async queryWorks(req: Request, res: Response) {
    const {month, year} = req.query;

    if(!month||!year){
      return res.status(401).json({ message: 'Forneça MONTH e YEAR dos registros.' });
    }

    const date = new Date()
    date.setFullYear(Number(year), Number(month));
    const {max, min} = await getDatasParams(date);
    const works = await REPOSITORY.work.getWorks(max, min);
    if(works.length < 1){
      return res.status(404).json({ message: 'Não foi encontrado registros.' });
    }
    return res.status(200).json(works);
  }

  async updateWork(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const user = decode(token);
    const props: Partial<WorkType> = req.body;
    const {id} = req.params;

    if(!id||!user){
      return res.status(401).json({ message: 'Forneça o ID do registro.' });
    }

    const work = await REPOSITORY.work.updateWork(id, props, user.id);

    if(!work){
      return res.status(404).json({ message: 'Registro atualizado.' });
    }
    return res.status(200).json(work);
  }


  async eraseWork(req: Request, res: Response) {
    const {id} = req.params;

    if(!id){
      return res.status(401).json({ message: 'Forneça o ID do registro.' });
    }

    await REPOSITORY.work.deleteWork(id);
    return res.status(200).json({ message: 'Registro deletado.' });
  }

}
