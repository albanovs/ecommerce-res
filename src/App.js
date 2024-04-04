import Register from './components/Register/register';
import { Login } from './components/Login/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
