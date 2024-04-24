import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home/Home';
import {Register} from './components/Register/register';
import { Login } from './components/Login/login';
import {Header} from './components/Header/Header';
import {Branches} from './pages/BranchesPage/Branches';
import {Branch} from './pages/BranchPage/Branch';
import {ContactPage} from './pages/ContactPage/ContactPage';
import {MenuPage} from './pages/MenuPage/MenuPage';
import{MainPage} from './pages/MainPage/MainPage';

import './scss/app.scss';

const Cart = Loadable({
  loader: () => import('./pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const FullPizza = React.lazy(() => import('./pages/FullPizza'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="cart"
            element={
              <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="pizza/:id"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <FullPizza />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/branches/:id" element={<Branch />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
