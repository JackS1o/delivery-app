import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerContext from '../../context/customerContext';
import sellerRequest from '../../api/sellerRequest';

function Checkout() {
  const { cartProducts } = useContext(CustomerContext);
  const [newCart, setNewCart] = useState(cartProducts);
  const [sellerData, setSellerData] = useState();
  const navigate = useNavigate();

  const removeCartProduct = (product) => {
    const newCartProducts = newCart.filter((item) => item.id !== product.id);
    const newArray = [...new Set(newCartProducts)];
    setNewCart(newArray);
  };

  const totalPrice = newCart.reduce(
    (acc, product) => acc + (product.price * product.quantity),
    0,
  );

  useEffect(() => {
    sellerRequest().then((response) => setSellerData(response));
  }, []);

  const finishOrder = async () => {
    navigate(`/customer/orders/${id}`);
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
          <select data-testid="customer_checkout__select-seller">
            {sellerData?.map((seller) => (
              <option
                key={ seller.id }
              >
                {seller.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Endereço</span>
          <input type="text" data-testid="customer_checkout__input-address" />
        </div>
        <div>
          <span>Número</span>
          <input
            type="number"
            data-testid="customer_checkout__input-address-number"
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
