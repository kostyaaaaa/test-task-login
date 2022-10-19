const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./connect');

const rootRouter = require('./routers');
const errorHandler = require('./errorHandler');

// create express instance
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// initialize app router
app.use(rootRouter);
// use error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
