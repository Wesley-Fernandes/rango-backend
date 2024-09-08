import { Router } from 'express';
import { AuthRoutes } from './auth';
import { TestRoutes } from './test';
import { AdminRoutes } from './admin';

class Routes {
  public router = Router();
  public test_routes = new TestRoutes(this.router);
  public auth_routes = new AuthRoutes(this.router);
  public admin_routes = new AdminRoutes(this.router);

  constructor() {
    this.router.use('/auth', this.auth_routes.route);
    this.router.use('/test', this.test_routes.route);
    this.router.use('/admin', this.admin_routes.route);
  }
}

const routes = new Routes();

export default routes;
