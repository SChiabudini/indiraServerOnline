const productRouter = require('express').Router();
const { getProductsHandler, getProductsAllHandler, getProductByIdHandler, getActiveProductsByNameHandler, getProductByNameHandler, getSoldProductsHandler, getProductsRatingHandler, getProductColorsHandler, postProductHandler, putProductHandler, putReduceStockHandler, putIncreaseStockHandler, putIncreasePriceHandler, putProductStatusHandler, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers.js');
//const upload = require('../config/uploadConfig.js');

productRouter.get('/', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
       return getActiveProductsByNameHandler(req, res);
     }

     return getProductsHandler(req, res); 
});

productRouter.get('/all', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
        return getProductByNameHandler(req, res);
    }

    return getProductsAllHandler(req, res); 
});

// productRouter.get('/all', getProductsAllHandler);

productRouter.get('/sold', getSoldProductsHandler);

productRouter.get('/rating', getProductsRatingHandler);

productRouter.get('/colors', getProductColorsHandler);

productRouter.get('/:id', getProductByIdHandler);

productRouter.post('/', postProductHandler);

// productRouter.post('/', upload.fields([
//     {name: 'images'},
//     {name: 'imageGlobal'}
// ]), postProductHandler);   //'upload.array('images', 10)' De esta manera este middleware procesa la subida de hasta 10 archivos bajo el campo images. Se puedes ajustar este número. Creo que 'upload.fields([{ name: 'images', maxCount: 10 }])' hace lo mismo.

productRouter.put('/', putProductHandler);

// productRouter.put('/', upload.fields([
//     {name: 'images'},
//     {name: 'imageGlobal'}
// ]), putProductHandler);

productRouter.put('/reduce', putReduceStockHandler);

productRouter.put('/increase', putIncreaseStockHandler);

productRouter.put('/increasePrice', putIncreasePriceHandler);

productRouter.put('/:id', putProductStatusHandler);

// productRouter.put('/deactive/:id', putProductStatusHandler);

productRouter.delete('/:id', deleteProductHandler);


module.exports = productRouter;