let is_ok= true

const {products} = require ("./products") 

export const customFetch= () => {
    return new Promise ((resolve, reject) => {
        if(is_ok){
            resolve(products);
        }else{
            reject("ko");
        }
    })
}