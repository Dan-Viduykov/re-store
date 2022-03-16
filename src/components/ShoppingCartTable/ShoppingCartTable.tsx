import React from "react";
import './ShoppingCartTable.css'

const ShoppingCartTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>40$</td>
                        <td>
                            <button className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                            <button className="btn btn-outline-success">
                                <i className="bi bi-plus-circle-fill"></i>
                            </button>
                            <button className="btn btn-outline-warning">
                                <i className="bi bi-dash-circle-fill"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="shopping-cart-table__total">Total: $201</div>
        </div>
    )
}

export default ShoppingCartTable