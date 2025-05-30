import express from 'express';

import routes from './routes/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

app.use('/api', routes);

// Handler Not Found error
app.use(notFoundHandler);

// Handle Application Error
app.use(errorHandler);

export default app;
