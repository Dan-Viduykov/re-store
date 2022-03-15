import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { HomePage, CartPage } from "../../Pages";

const App: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />} />
            <Route
                path="/cart"
                element={<CartPage />} />
        </Routes>
    )
}

export default App;