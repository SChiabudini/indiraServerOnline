const getProductsHandler = require('./getProductsHandler.js');
const getProductsAllHandler = require('./getProductsAllHandler.js');
const getProductByIdHandler = require('./getProductByIdHandler.js');
const getActiveProductsByNameHandler = require('./getActiveProductsByNameHandler.js')
const getProductByNameHandler = require('./getProductByNameHandler.js');
const getSoldProductsHandler = require('./getSoldProductsHandler.js');
const getProductsRatingHandler = require('./getProductsRatingHandler.js');
const getProductColorsHandler = require('./getProductColorsHandler.js');
const postProductHandler = require('./postProductHandler.js');
const putProductHandler = require('./putProductHandler.js');
const putReduceStockHandler = require('./putReduceStockHandler.js');
const putIncreaseStockHandler = require('./putIncreaseStockHandler.js');
const putIncreasePriceHandler = require('./putIncreasePriceHandler.js');
const putProductStatusHandler = require('./putProductStatusHandler.js')
const deleteProductHandler = require('./deleteProductHandler.js');


module.exports = {
    getProductsHandler,
    getProductsAllHandler,
    getProductByIdHandler,
    getActiveProductsByNameHandler,
    getProductByNameHandler,
    getSoldProductsHandler,
    getProductsRatingHandler,
    getProductColorsHandler,
    postProductHandler,
    putProductHandler,
    putReduceStockHandler,
    putIncreaseStockHandler,
    putIncreasePriceHandler,
    putProductStatusHandler,
    deleteProductHandler
}