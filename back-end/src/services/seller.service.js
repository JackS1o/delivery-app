const {
  user,
  sale,
  salesProducts,
  sequelize,
  products,
} = require('../database/models');

const getSeller = async () => {
  const sellerData = await user.findAll({ where: { role: 'seller' } });
  return sellerData;
};

const createSale = async (body) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, order,
  } = body;
  const result = await sequelize.transaction(async (transaction) => {
    const saleData = await sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    });
    const prod = await order.order.map((product) => ({
      saleId: saleData.dataValues.id,
      productId: product.id,
      quantity: product.quantity,
    }));
    await salesProducts.bulkCreate(prod, { transaction });
    return saleData;
  });
  return result;
};

const getSales = async () => {
  const sales = await sale.findAll();
  return sales;
};

const getSalesById = async (sellerId) => {
  const sales = await sale.findAll({
    where: { id: sellerId },
  });
  return sales;
};

const getSalesBySellerId = async (sellerId) => {
  const sales = await sale.findAll({
    where: { sellerId },
  });
  console.log(sales);
  return sales;
};

const getSellerById = async (id) => {
  const items = await sale.findOne({
    where: { id },
    include: [
      {
        model: products,
        as: 'products',
        through: { attributes: ['quantity'], as: 'product' },
      },
    ],
  });
  const seller = await user.findOne({ where: { id: items.sellerId } });
  return { items, seller };
};

const updateSaleStatus = async (id, status) => {
  const saleData = await sale.update({ status }, { where: { id } });
  return saleData;
};

module.exports = {
  getSeller,
  createSale,
  getSalesById,
  getSales,
  getSalesBySellerId,
  getSellerById,
  updateSaleStatus,
};
