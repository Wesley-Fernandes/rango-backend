import type { Router } from 'express';
import controllers from '../controllers';

export class WorkRoutes {
  public route: Router;
  private work = new controllers.Work();

  constructor(router: Router) {
    this.route = router;
    this.route.post('/create', this.work.createWork);
    this.route.get('/find/:id', this.work.getWork);
    this.route.get('/list', this.work.getWorks);
    this.route.patch('/find/:id', this.work.updateWork);
    this.route.delete('/find/:id', this.work.eraseWork);
    this.route.get('/schedule', this.work.queryWorks);
  }
}
