import PropTypes from "prop-types";


const Header = ({selectedProduct}) => {
    return (
        <div className="max-w-6xl mx-auto flex justify-between p-10">
            <div className="text-2xl font-bold">
                logo
            </div>
            <div className="text-2xl font-bold flex space-x-7 list-none">
                <li>home</li>
                <li>product</li>
                <li>cart {selectedProduct}</li>
                <li>$ 500</li>
            </div> 
        </div>
    );
};

Header.propTypes = {
    selectedProduct: PropTypes.number,
}

export default Header;