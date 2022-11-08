const { sale, products } = require('../database/models');

const getSalesById = async (id) => {
  const sales = await sale.findOne({
    where: { id },
    include: [{
      model: products,
      as: 'products',
      through: { attributes: ['quantity'], as: 'product' },
    }]
  });
  return sales;
};

module.exports = {
  getSalesById,
};
