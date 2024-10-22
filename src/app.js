import express from 'express';
import "dotenv/config";
import vehicleRouter from './route/produto-route.js';

const app = express();
app.use(express.json());

app.use('/produtos', vehicleRouter);

app.listen(process.env.API_PORT, () => console.log('Server is running on port ' + process.env.API_PORT));