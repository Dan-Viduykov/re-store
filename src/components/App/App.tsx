import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { HomePage, CartPage } from "../../Pages";

const App: React.FC = () => {
    return (
        <main className="container" role="main">
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