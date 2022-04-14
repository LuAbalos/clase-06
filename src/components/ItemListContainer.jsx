import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { getData } from "../js-components/products";
import ItemList from './ItemList'

const ItemListContainer= () => {

  const [productosDeHigiene, setproductosDeHigiene] = useState ([]);
    
  useEffect(() =>{
    async function pedirDatos() {
      let datosLlegando = await getData()
      setproductosDeHigiene(datosLlegando)
  }
  pedirDatos()
  }, [])

  function onAdd (c) {
    alert(`se agregó ${c} productos`)
  }

  return (
    <>
      <ItemList productos={productosDeHigiene} />
      <ItemCount stock ={5} initial={1} onAdd= {onAdd} />
    </>
  );
}
  
export default ItemListContainer;
