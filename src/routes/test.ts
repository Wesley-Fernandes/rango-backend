import { type Router } from 'express';
import * as M from '../middlewares';
import controllers from '../controllers';

export class TestRoutes {
  public route: Router;
  private test = new controllers.Test();

  constructor(router: Router) {
    this.route = router;
    this.route.get('/error', this.test.error_handler);
    this.route.get('/online', this.test.online);
    this.route.get('/is-autheticated', M.isAuthenticated, this.test.auth);
  }
}
