import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/notFound';
import Register from './pages/register';
import Login from './pages/login';
import CustomerProducts from './pages/customerProducts';
import Customer from './pages/customer';
import ContextProvider from './context/customerProvider';
import SaleProvider from './context/saleProvider';
import Checkout from './pages/checkout';
import SellerOrders from './pages/sellerOrders';
import AdminManage from './pages/adminManage';
import SellerOrderDetail from './pages/sellerOrderDetail';
import CustomerOrder from './pages/customerOrders';

function App() {
  return (
    <ContextProvider>
      <SaleProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/customer/products" element={ <CustomerProducts /> } />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/register" element={ <Register /> } />
            <Route exact path="/404" element={ <NotFound /> } />
            <Route exact path="*" element={ <Navigate to="/404" replace /> } />
            <Route exact path="/customer/checkout" element={ <Checkout /> } />
            <Route
              exact
              path="/"
              element={ <Navigate to="/login" /> }
            />
            <Route exact path="/customer" element={ <Customer /> } />
            <Route exact path="/customer/orders" element={ <CustomerOrder /> } />
            <Route exact path="/customer/orders/:id" element={ <CustomerOrder /> } />
            <Route exact path="/seller/orders" element={ <SellerOrders /> } />
            <Route exact path="/seller/orders/:id" element={ <SellerOrderDetail /> } />
            <Route exact path="/admin/manage" element={ <AdminManage /> } />
          </Routes>
        </BrowserRouter>
      </SaleProvider>
    </ContextProvider>
  );
}

export default App;
