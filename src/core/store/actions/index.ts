import { IBook, AppActionsTypes } from "../../types/appReducer"

const booksLoaded = (newBooks: IBook[]) => {
    return {
        type: AppActionsTypes.BOOKS_LOADED,
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: AppActionsTypes.BOOKS_REQUESTED
    }
}

const booksError = (error: Error) => {
    return {
        type: AppActionsTypes.BOOKS_ERROR,
        payload: error
    }
}

export {
    booksLoaded,
    booksRequested,
    booksError
}