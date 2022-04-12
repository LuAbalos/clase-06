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

  return (
    <>
      <ItemList productos={productosDeHigiene} />
    </>
  );
}
  
export default ItemListContainer;
