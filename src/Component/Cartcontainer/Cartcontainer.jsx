import About from '../About/About';
import Cart from '../Cart/Cart';
import './Cartcontainer.css'
import PropTypes from 'prop-types';


const Cartcontainer = ({hendleIsActive,isActive,selectedProduct,hendleDelete}) => {
    return (
        <div className="">
           <h3 className="text-3xl font-bold">Cart Category</h3>
           <div className="flex justify-around">
                <div onClick={()=>hendleIsActive("cart")} 
                className={`${isActive.cart?"btn active":"btn"}`}>Cart</div>
                <div onClick={()=>hendleIsActive("about")} 
                className={`${isActive.cart?"btn":"btn active"}`}>about</div>
            </div> 
            {isActive.cart?<Cart selectedProduct={selectedProduct} 
            hendleDelete={hendleDelete}></Cart>:<About></About>}
        </div>
    );
};

Cartcontainer.propTypes = {
    hendleIsActive: PropTypes.func,
    isActive: PropTypes.object,
    selectedProduct: PropTypes.array,
    hendleDelete: PropTypes.func, 
}

export default Cartcontainer;