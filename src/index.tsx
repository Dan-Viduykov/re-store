import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import BookstoreService from "./core/services/BookstoreService";
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext";

import store from "./core/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const bookstoreService = new BookstoreService()

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>    
    </Provider>
, document.querySelector("#root"))