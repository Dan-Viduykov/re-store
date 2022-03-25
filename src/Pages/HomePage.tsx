import React from "react";
import BookListContainer from "../components/BookList";
import ShoppingCartTable from "../components/ShoppingCartTable";

const HomePage = () => {
    return (
        <div>
            <BookListContainer />
            <ShoppingCartTable />
        </div>
    )
}

export default HomePage