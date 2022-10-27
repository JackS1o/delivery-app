import React from 'react';

function Checkout() {
  return (
    <div>
      <header>
        <div data-testid="11">Produtos</div>
        <div data-testid="12">Meus Pedidos</div>
        <div data-testid="13">Nome do Usuário</div>
        <button type="button" data-testid="14">Sair</button>
      </header>
      <section>
        <h3>Finalizar Pedido</h3>
        <div>
          <span>Item</span>
          <span>Descrição</span>
          <span>Quantidade</span>
          <span>Valor Unitário</span>
          <span>Sub-total</span>
          <button type="button">Remover Item</button>
          <h1 data-testid="28">Total</h1>
        </div>
        <h3>Detalhes e Endereço para Entrega</h3>
        <div>
          <span>P.Vendedora Responsável</span>
          <select data-testid="29">
            <option value="option1">Vendedora 1</option>
          </select>
        </div>
        <div>
          <span>Endereço</span>
          <input type="text" data-testid="30" />
        </div>
        <div>
          <span>Número</span>
          <input type="number" data-testid="31" />
        </div>
        <button type="button" data-testid="32">Finalizar Pedido</button>
      </section>
    </div>
  );
}

export default Checkout;
