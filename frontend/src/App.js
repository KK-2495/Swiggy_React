// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  const {state} = useContext(AuthContext);
  console.log(state,"state from authcontext");

  return (

    <>
    <Routes>
      <Route exact path='/' element={<Home /> } />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
    </Routes>
    </>

  );
}

export default App;
