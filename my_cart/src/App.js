import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";

function App() {
  const products = [
    {
      price: 20,
      name: "Lays",
      quantity: 0,
    },
    {
      price: 200,
      name: "Poco Back Cover",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    let newtotalAmount = totalAmount
    newtotalAmount+=newProductList[index].price
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const DecrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount
    if(newProductList[index].quantity>0)
    {
    newProductList[index].quantity--;
     newtotalAmount-=newProductList[index].price
    }
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  };
  const resetQuantity = () =>{
    let newProductList = [...productList];
    newProductList.map((products)=>{products.quantity=0

    })
    setProductList(newProductList);
    settotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount-=newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  }

  const addItem = (name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    })
    setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
      <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          DecrementQuantity={DecrementQuantity}
          removeItem={removeItem}
          
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
