import { connect } from "react-redux";
import React from "react";
import { AppState, ICartItem } from "../../core/types/appReducer";
import './ShoppingCartTable.css'
import { allBookRemovedFromCart, bookAddedToCart, bookRemovedFromCart } from "../../core/store/actions";

interface ShoppingCartTableProps {
    items: ICartItem[];
    total: number;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onDelete: (id: number) => void;
}

const ShoppingCartTable: React.FC<ShoppingCartTableProps> = (props) => {
    const { items, total, onIncrease, onDecrease, onDelete } = props

    const renderRow = (item: ICartItem, idx: number) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger" >
                        <i className="bi bi-trash-fill"></i>
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success">
                        <i className="bi bi-plus-circle-fill"></i>
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning">
                        <i className="bi bi-dash-circle-fill"></i>
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items?.map(renderRow) }
                </tbody>
            </table>
            <div className="shopping-cart-table__total">Total: ${total}</div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    const { cartItems, orderTotal } = state;

    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = () => {
    return {
        onIncrease: (id: number) => bookAddedToCart,
        onDecrease: (id: number) => bookRemovedFromCart,
        onDelete: (id: number) => allBookRemovedFromCart,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)