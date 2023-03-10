import './App.css';
import Header from './Components/Header/Header';
import { Routes , Route  } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
//import About from './Components/About/About';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/requireAuth' element={<RequireAuth></RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
