import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";



const Allproducts = ({hendleSelectedProduct}) => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])

    return (
        <div>
            <h3 className="text-3xl font-bold">All Products</h3>
            {
                allProducts.map((p,idx) => <Product 
                key={idx} p={p} hendleSelectedProduct={hendleSelectedProduct}></Product>)
            }
        </div>
    );
};

Allproducts.propTypes = {
    hendleSelectedProduct: PropTypes.func,
}

export default Allproducts;