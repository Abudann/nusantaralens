import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.middlerware.js';
import heroRoutes from './routes/hero.routes.js';
import cultureRoutes from './routes/culture.routes.js';
import languageRoutes from './routes/language.routes.js';

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(cors());
app.use(express.json());
app.use(heroRoutes);
app.use(cultureRoutes);
app.use(languageRoutes);

app.get('/', (req, res) => {
  res.send(`Assalamualaikum API berhasil berjalan`);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Is Running on http://${HOST}:${PORT}`);
});
