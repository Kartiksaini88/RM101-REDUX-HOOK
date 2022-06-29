import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/sidebar/sidebar';
import { Register } from './components/pages/register-page/register';
import { Login } from './components/pages/login/login';
import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './components/hoc/protectedroute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='' element={<Sidebar></Sidebar>}></Route>
      </Routes>

    </div>
  );
}

export default App;
