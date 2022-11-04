import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerContext from '../../context/customerContext';
import { sellerRequest, saleCreate } from '../../api/sellerRequest';

function Checkout() {
  const { cartProducts } = useContext(CustomerContext);
  const [newCart, setNewCart] = useState(cartProducts);
  const [sellerData, setSellerData] = useState();
  const [address, setAddress] = useState({
    seller: 2,
    address: '',
    number: '',
  });
  const navigate = useNavigate();

  const removeCartProduct = (product) => {
    const newCartProducts = newCart.filter((item) => item.id !== product.id);
    const newArray = [...new Set(newCartProducts)];
    setNewCart(newArray);
  };

  const totalPrice = newCart.reduce(
    (acc, product) => acc + Number(product.price * product.quantity),
    0,
  );

  useEffect(() => {
    sellerRequest().then((response) => setSellerData(response));
  }, []);

  const handleCheckout = ({ target }) => {
    const { name, value } = target;
    setAddress({ ...address, [name]: value });
  };

  const finishOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const order = {
      user_id: user.id,
      seller_id: address.seller,
      total_price: totalPrice,
      delivery_address: address.address,
      delivery_number: address.number,
      status: 'Pendente',
    };
    console.log(order);
    const createSale = await saleCreate(order);
    navigate(`/customer/orders/${createSale.id}`);
  };

  return (
    <div>
      <header>
        <div data-testid="customer_products__element-navbar-link-products">
          Produtos
        </div>
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus Pedidos
        </div>
        <div data-testid="customer_products__element-navbar-user-full-name">
          Nome do Usuário
        </div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </header>
      <h3>Finalizar Pedido</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
        {newCart.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {(index + 1)}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {product.name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {product.quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {product.price.replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {(product.price * product.quantity).toFixed(2).replace('.', ',')}
            </td>
            <td>
              <button
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                onClick={ () => removeCartProduct(product) }
              >
                <span
                  data-testid={ `customer_products__element-card-title-${product.id}` }
                />
                Remover
              </button>
            </td>
          </tr>
        ))}
      </table>
      <section>
        <h1 data-testid="customer_checkout__element-order-total-price">
          Total: R$
          <span>{totalPrice.toFixed(2).replace('.', ',')}</span>
        </h1>
        <h3>Detalhes e Endereço para Entrega</h3>
        <div>
          <span>P.Vendedora Responsável</span>
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            value={ address.seller }
            onChange={ handleCheckout }
          >
            {sellerData?.map((seller) => (
              <option
                key={ seller.id }
                defaultValue={ seller.id }
                value={ seller.id }
              >
                {seller.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Endereço</span>
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            name="address"
            value={ address.address }
            onChange={ handleCheckout }
          />
        </div>
        <div>
          <span>Número</span>
          <input
            type="number"
            data-testid="customer_checkout__input-address-number"
            name="number"
            value={ address.number }
            onChange={ handleCheckout }
          />
        </div>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ finishOrder }
        >
          Finalizar Pedido
        </button>
      </section>
    </div>
  );
}

export default Checkout;
