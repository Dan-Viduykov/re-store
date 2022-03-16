import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import { Route, Routes } from "react-router-dom";
import { HomePage, CartPage } from "../../Pages";
import ShopHeader from "../ShopHeader";

const App: React.FC = () => {
    return (
        <main className="container" role="main">
            <ShopHeader numItems={5} total={210}/>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />} />
                <Route
                    path="/cart"
                    element={<CartPage />} />
            </Routes>
        </main>
    )
}

export default App;