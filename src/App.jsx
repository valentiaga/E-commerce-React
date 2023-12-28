import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      
      <ItemListContainer saludo = 'Hola comision los quiero mucho'></ItemListContainer>
    </div>
  )
}

export default App

//NOTA: props son OBJETOS uqe le pasan info de un componente padre a un hijo. En este caso es el saludo.