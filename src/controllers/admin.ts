import REPOSITORY from '../repository';
import type { Request, Response } from 'express';
import type { PermissionType } from '../schema/permission';

export class Admin {
  async createPermission(req: Request, res: Response) {
    const props:PermissionType = req.body;

    if(!props.email||!props.role){
      return res.status(401).json({ message: 'Forneça a ROLE e o EMAIL do usuario.' });
    }

    if(await REPOSITORY.admin.existPermission(props.email)){
      return res.status(409).json({ message: 'Já existe uma permissão para este email.' });
    }
    
    await REPOSITORY.admin.createPermission(props);
    return res.status(201).json({ message: 'Permissão criada.' });
  }

  async getPermission(req: Request, res: Response) {
    const props:Partial<PermissionType> = req.body;

    if(!props.email){
      return res.status(401).json({ message: 'Forneça o EMAIL do usuario.' });
    }

    const permission = await REPOSITORY.admin.getPermission(props.email);
    if(!permission){
      return res.status(404).json({ message: 'Permissão não existe.' });
    }
    return res.status(200).json(permission);
  }

  async erasePermission(req: Request, res: Response) {
    const props:Partial<PermissionType> = req.body;

    if(!props.email){
      return res.status(401).json({ message: 'Forneça o EMAIL do usuario.' });
    }

    await REPOSITORY.admin.deletePermission(props.email);
    return res.status(200).json({ message: 'Permissão deletada.' });
  }

  async updatePermission(req: Request, res: Response){
    const props:PermissionType = req.body;

    if(!props.email||!props.role){
      return res.status(401).json({ message: 'Forneça a ROLE e o EMAIL do usuario.' });
    }

    if(await REPOSITORY.admin.existPermission(props.email) == null){
      return res.status(409).json({ message: 'Não existe permissão para esse usuario.' });
    }

    await REPOSITORY.admin.updatePermission(props);
    return res.status(201).json({ message: 'Permissão atualizada.' });
  }
}
