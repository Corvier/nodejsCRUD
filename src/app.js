import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from './routes/router.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.set(express.static(join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));

// Routes
app.use(indexRoutes);

app.listen(app.get("port"), () => console.log(`Server is Running on port http://localhost:${app.get("port")}`));

