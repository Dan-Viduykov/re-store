import { connect } from "react-redux";
import React from "react";
import { AppState } from "../../core/types/appReducer";
import './ShoppingCartTable.css'

interface ShoppingCartTableProps {
    items: any[]
    total: any
    onIncrease: any
    onDecrease: any
    onDelete: any
}

const ShoppingCartTable: React.FC<ShoppingCartTableProps> = (props) => {
    const { items, total, onIncrease, onDecrease, onDelete } = props

    const renderRow = (item: any, idx: number) => {
        const { id, name, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
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
                    { items.map(renderRow) }
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
        onIncrease: (id: number) => {
            console.log('onIncrease', id);
        },

        onDecrease: (id: number) => {
            console.log('onDecrease', id);
        },

        onDelete: (id: number) => {
            console.log('onDelete', id);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)