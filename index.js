const express = require('express');
const app = express();

const morgan = require('morgan');

const { config } = require('./config/index');
const OrderRoutes = require('./routes/OrderRoutes');

app.use(morgan('dev'));

// Body-Parser by express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
OrderRoutes(app);

// Catch 404

// Errors Middlewares

app.listen(config.port, () => console.log('Server is running') );