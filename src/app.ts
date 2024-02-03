import express from 'express';
import { Response } from 'express';
import cors from 'cors';
import contentRouter from './routes/contentRouter';

const app = express();

app.use(
  cors({
    origin: [
      'https://main--bejewelled-longma-891e99.netlify.app',
      'http://localhost:3000',
      'https://sumolibrary.netlify.app',
    ],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'], // This will allow CORS to be effective for all the route methods otherwise
    // by default only for GET
  }),
);

// app.options('*',cors());

// app.options('*',cors({
//     origin: ['https://main--bejewelled-longma-891e99.netlify.app', 'http://localhost:3000']
// }));

app.use('/api/v1/fops/contents', contentRouter);

// app.use("/api/v1/fops/sevs",sevRouter)

// 404 Error
app.all('*', (res: Response) => {
  res.status(404).send({
    status: '404 Error',
    message: 'Url not present',
  });
});

export default app;
