import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './src/app';

//Configuring the required environment into Node JS which is present in config.env file.
dotenv.config({ path: './.env' });

// Connecting to DB
// Need to do a type assertion with string otherwise it is throwing error as it is thinking CONNECTION_STRING can be undefined and
// mongoose cannot be connected to an undefined connection string
const connectionString = process.env.DB_CONNSRTING?.replace(
  '<password>',
  process.env.DB_PASSWORD || '',
);

mongoose
  .connect(connectionString as string)
  .then(() => {
    console.log('Database Successfully Connected');
  })
  .catch((err) => {
    var error = {
      status: 'Cannot Connect to DB',
      error: err,
    };
    console.log(error);
  });

// Configuring port number
let port =
  process.env.NODE_ENV === 'production' ? process.env.PORT || 5000 : 6000;

console.log(port);

app.listen(port, () => {
  console.log('Connected to the port : ', port);
});
