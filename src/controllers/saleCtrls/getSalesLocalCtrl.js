require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesLocalCtrl = async () => {
    
    const salesLocal = await Sale.find({soldAt: "Local", active: true})
    .populate({
        path: 'client'
    })
    .populate({
        path: 'products'
    });;

    return salesLocal;
}

module.exports = getSalesLocalCtrl;