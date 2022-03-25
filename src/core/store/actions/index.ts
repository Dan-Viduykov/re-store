import { Dispatch } from 'react';
import BookstoreService from '../../services/BookstoreService';
import { IBook, AppActionsTypes, AppActions } from "../../types/appReducer"

const booksLoaded = (newBooks: IBook[]) => {
    return {
        type: AppActionsTypes.FETCH_BOOKS_SUCCESS,
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: AppActionsTypes.FETCH_BOOKS_REQUEST
    }
}

const booksError = (error: Error) => {
    return {
        type: AppActionsTypes.FETCH_BOOKS_FAILURE,
        payload: error
    }
}

export const bookAddedToCart = (bookId: number) => {
    return {
        type: AppActionsTypes.BOOK_ADDED_TO_CART,
        payload: bookId
    }
}

const fetchBooks = (bookstoreService: BookstoreService, dispatch: Dispatch<any>) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data: IBook[]) => dispatch(booksLoaded(data)))
        .catch((err: Error) => dispatch(booksError(err)));
}

export {
    fetchBooks
}