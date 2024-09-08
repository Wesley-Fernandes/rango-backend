import type { Express } from 'express';
import env from './env';

const runner = (app: Express) => {
  app.listen(env.PORT, () =>
    console.log(`Server is running on port ${env.PORT}`)
  );
};

export default runner;
