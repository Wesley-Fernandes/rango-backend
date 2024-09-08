import { type Express, json } from 'express';
import * as M from '../middlewares';
import routes from '../routes';

const configuration = (app: Express) => {
  //configuring middleware
  app.use(json());

  //routes
  app.use('/api', routes.router);
  app.use(M.errors);
};

export default configuration;
