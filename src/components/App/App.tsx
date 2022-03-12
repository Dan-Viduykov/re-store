import React from "react";
import './App.css'
import { WithBooksroreService } from "../Hoc";

const App: React.FC = ({ bookstoreService }: any) => {
    console.log(bookstoreService.getBooks());
    return <div> App </div>
}

export default WithBooksroreService()(App);