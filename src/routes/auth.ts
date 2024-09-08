import type { Router } from 'express';
import controllers from '../controllers';

export class AuthRoutes {
  public route: Router;
  private auth = new controllers.Auth();

  constructor(router: Router) {
    this.route = router;
    this.route.post('/register', this.auth.register);
    this.route.post('/login', this.auth.login);
  }
}
