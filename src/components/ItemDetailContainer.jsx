import { useEffect, useState } from "react";
const {customFetch} = require ('../js-components/customFetch')
import ItemDetail from "./ItemDetail";
const {products} = require ('../js-components/products')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect (() => {
        customFetch (2000, products [2])
            .then(result => setDato(result))
            .catch(err => console.log(err))   
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
