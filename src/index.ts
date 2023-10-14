import "reflect-metadata"
import express from 'express';
import { config } from 'dotenv';
import routes from './routes';

import './shared/container'

config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(routes)

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));





