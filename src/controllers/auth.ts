import type { Request, Response } from 'express';
import { userSchema, userLoginSchema } from '../schema/user';
import { decript, encript, genToken } from '../utils/criptografy';
import REPOSITORY from '../repository';

export class Auth {
  async register(req: Request, res: Response) {
    const {birth,email, username, password: FPassword} = userSchema.parse(req.body);
    if(await REPOSITORY.user.havePermission(email)==null){
      return res.status(401).json({ message: 'Você não tem permissão para cadastrar esse email.' });
    }
    if (await REPOSITORY.user.existsEmail(email)){
      return res.status(409).json({ message: 'Email já cadastrado.' });
    }
    const password = encript(FPassword);
    await REPOSITORY.user.createUser({birth, email, username, password});
    return res.status(201).json({ message: 'Conta criada com sucesso!' });
  }

  async login(req: Request, res: Response) {
    const user = userLoginSchema.parse(req.body);
    const found = await REPOSITORY.user.find(user.email);
    if (!found) return res.status(404).json({ message: 'Usuário não existe.' });
    if (decript(user.password, found.password)) {
      res.setHeader('authorization', genToken(found.id));
      return res.status(200).json({ message: 'Login efetuado com sucesso.' });
    }
    return res.status(401).json({ message: 'Dados invalidos.' });
  }
}
