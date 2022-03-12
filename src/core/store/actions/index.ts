import { IBook } from "../../types/appReducer"

const booksLoaded = (newBooks: IBook[]) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
}

export {
    booksLoaded
}