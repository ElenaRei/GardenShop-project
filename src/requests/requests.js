import { getProductsAction } from "../store/productsReducer";

const base_url = 'http://localhost:3333';
const products_url=base_url + '/products/all'

export const fetchProductList =()=>{
    return function(dispatch){
        fetch(products_url)
        .then(res=>res.json())
        .then(data =>dispatch(getProductsAction(data)))
    }
}