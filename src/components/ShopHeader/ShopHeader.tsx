import React from "react";
import { Link } from "react-router-dom";
import "./ShopHeader.css"

interface ShopHeaderProps {
    numItems: number;
    total: number;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ numItems, total }) => {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__logo text-dark" >ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="header__cart" >
                    <i className="header__icon bi bi-cart-fill" />
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

export default ShopHeader