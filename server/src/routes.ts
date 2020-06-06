import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsControleler = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsControleler.create); 
routes.get('/points', pointsControleler.index); 
routes.get('/points/:id', pointsControleler.show); 

export default routes;