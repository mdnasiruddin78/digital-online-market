import PropTypes from "prop-types";


const Cart = ({selectedProduct,hendleDelete}) => {

    return (
        <div>
            {
                selectedProduct.map((max,idx) => (
                    <div key={idx}>
                        <div className="flex space-x-8 items-center">
                            <img className="w-20" src={max.image} alt="" />
                            <h3>{max.price}</h3>
                            <button onClick={()=>hendleDelete(max.id)}>delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

Cart.propTypes = {
    selectedProduct: PropTypes.array,
    hendleDelete: PropTypes.func,
}

export default Cart;