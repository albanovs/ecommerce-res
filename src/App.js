import Register from './components/Register/register';
import { Login } from './components/Login/login';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Branches from './pages/BranchesPage/Branches';
import Branch from './pages/BranchPage/Branch';
import ContactPage from './pages/ContactPage/ContactPage';
import MenuPage from './pages/MenuPage/MenuPage';

function App() {

  
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/branches/:id" element={<Branch />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
    </div>
  );
}

export default App;
