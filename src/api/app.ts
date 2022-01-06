import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import router from './routes';

import '../database';

class Application {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.initializeConfiguration();
    this.initializeRoutes();
  }

  private initializeConfiguration() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private initializeRoutes() {
    this.app.use(router);
  }
}

export default new Application().app;
