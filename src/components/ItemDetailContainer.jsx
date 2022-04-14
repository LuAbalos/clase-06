import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import customFetch from "../js-components/customFetch"
import {products} from '../js-components/products'

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
console.log (products)
    useEffect (() => {
        customFetch(
            2000,
            products)
          
            .then((result) => setDato(result[2]))
            .catch((err) => console.log(err)); 
    }, []);
console.log(dato)
    return (
      <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
