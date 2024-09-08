import 'express-async-errors';
import express from 'express';
import configuration from './config/configuration';
import runner from './config/runner';

const app = express();
configuration(app);
runner(app);
