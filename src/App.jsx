import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//importamos el proveedor de contextos y hago que envuelva toda la app
import { ChartProvider } from './context/ChartContext';
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ChartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element = {<Cart/>} />
          </Routes>
        </ChartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

//NOTA: props son OBJETOS uqe le pasan info de un componente padre a un hijo. En este caso es el saludo.