import React from "react";
import "./ShopHeader.css"

interface ShopHeaderProps {
    numItems: number;
    total: number;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ numItems, total }) => {
    return (
        <header className="header">
            <a className="header__logo text-dark" href="#">ReStore</a>
            <a className="header__cart" href="#">
                <i className="header__icon bi bi-cart-fill"></i>
                {numItems} items (${total})
            </a>
        </header>
    )
}

export default ShopHeader