const MOCK_STREET = 'Rua Mock Mockado, Bairro Mock';

export default async () => ([
  {
    id: '0001',
    userId: 3,
    sellerId: 2,
    totalPrice: 100,
    deliveryAddress: MOCK_STREET,
    deliveryNumber: 321,
    saleDate: new Date(),
    status: 'Pendente',
  },
  {
    id: '0002',
    userId: 3,
    sellerId: 2,
    totalPrice: 100,
    deliveryAddress: MOCK_STREET,
    deliveryNumber: 321,
    saleDate: new Date(),
    status: 'Preparando',
  },
  {
    id: '0003',
    userId: 3,
    sellerId: 2,
    totalPrice: 100,
    deliveryAddress: MOCK_STREET,
    deliveryNumber: 321,
    saleDate: new Date(),
    status: 'Entregue',
  },
]);
