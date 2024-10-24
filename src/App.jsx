
import { useState } from 'react'
import './App.css'
import Allproducts from './Component/Allproducts/Allproducts'
import Cartcontainer from './Component/Cartcontainer/Cartcontainer'
import Header from './Component/Header/Header'


function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const hendleIsActive = (status) => {
    if(status === "cart"){
      setIsActive({
            cart: true,
        status: "cart"
      })
    }
    else{
      setIsActive({
        cart: false,
      status: "cart"
  })
    }
  }

  const [selectedProduct, setSelectedProduct] = useState([])

  const hendleDelete = (id) => {

    const removeItem = selectedProduct.filter((x) => x.id !== id)
    setSelectedProduct(removeItem)
  }

  const hendleSelectedProduct = (p) => {

    const isExist = selectedProduct.find((i) => i.id === p.id)

    if(isExist){
      alert('alrady exist')
    }
    else{
      const newProduct = [...selectedProduct,p]
    setSelectedProduct(newProduct)
    }
  }

  return (
    <>
      <Header selectedProduct={selectedProduct.length}></Header>
      <div className='flex justify-around'>
          <Allproducts hendleSelectedProduct={hendleSelectedProduct}></Allproducts>
          <Cartcontainer isActive={isActive} selectedProduct={selectedProduct}
          hendleIsActive={hendleIsActive} hendleDelete={hendleDelete}></Cartcontainer>
      </div>
    </>
  )
}

export default App
