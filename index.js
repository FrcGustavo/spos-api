const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');

const { config } = require('./config/index');
const ProductRoutes = require('./routes/ProductRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

const {
    errorHandler,
    logErrors,
    wrapErrors
} = require('./utils/midlewares/errorHandler');
const notFoundHandler = require('./utils/midlewares/notFoundHandler');

app.use(morgan('dev'));
app.use(cors());

// Body-Parser by express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
ProductRoutes(app);
OrderRoutes(app);
AuthRoutes(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => console.log('Server is running') );