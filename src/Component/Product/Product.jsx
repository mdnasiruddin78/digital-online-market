import PropTypes from "prop-types";


const Product = ({p,hendleSelectedProduct}) => {
    const {name,image,price,isFeature} = p
    return (
        <div className="border-2 border-gray-500 mb-4 text-center">
            <img className="w-[300px]" src={image} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{isFeature?"feature exist":"not avalable"}</p>
            <button onClick={()=>hendleSelectedProduct(p)} 
            className="p-2 px-5 bg-green-500 border rounded-xl">Add to Cart</button>
        </div>
    );
};

Product.propTypes = {
    p: PropTypes.object,
    hendleSelectedProduct: PropTypes.func,
}

export default Product;