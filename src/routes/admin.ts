import type { Router } from 'express';
import controllers from '../controllers';

export class AdminRoutes {
  public route: Router;
  private admin = new controllers.Admin();

  constructor(router: Router) {
    this.route = router;
    this.route.post('/create-permission', this.admin.createPermission);
    this.route.patch('/update-permission', this.admin.updatePermission);
    this.route.get('/receive-permission', this.admin.getPermission);
    this.route.delete('/erase-permission', this.admin.erasePermission);
  }
}
