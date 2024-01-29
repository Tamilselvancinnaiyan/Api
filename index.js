import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import bookRoutes from './routes/book.js';

const app = express();

app.use('/book', bookRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Remove the MongoDB connection code

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
