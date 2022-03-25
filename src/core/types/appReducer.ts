interface IBook {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

interface ICartItem {
    id: number,
    title: string,
    count: number,
    total: number
}

type AppState = {
    books: Array<IBook>,
    loading: boolean,
    error: Error | null,
    cartItems: ICartItem[],
    orderTotal: number
}

export enum AppActionsTypes {
    FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE",
    BOOK_ADDED_TO_CART = "BOOK_ADDED_TO_CART",
    BOOK_REMOVED_FROM_CART = "BOOK_REMOVED_FROM_CART",
    ALL_BOOKS_REMOVED_FROM_CART = "ALL_BOOKS_REMOVED_FROM_CART",
}

interface ActionBooksLoaded {
    type: AppActionsTypes.FETCH_BOOKS_SUCCESS;
    payload?: IBook[]
}

interface ActionBooksRequested {
    type: AppActionsTypes.FETCH_BOOKS_REQUEST;
}

interface ActionBooksError {
    type: AppActionsTypes.FETCH_BOOKS_FAILURE;
    payload?: Error
}

interface ActionBookAddedToCart {
    type: AppActionsTypes.BOOK_ADDED_TO_CART;
    payload?: number
}

interface ActionBookRemovedFromCart {
    type: AppActionsTypes.BOOK_REMOVED_FROM_CART;
    payload?: number
}

interface ActionAllBooksRemovedFromCart {
    type: AppActionsTypes.ALL_BOOKS_REMOVED_FROM_CART;
    payload?: number
}

type AppActions = ActionBooksLoaded
                | ActionBooksRequested
                | ActionBooksError
                | ActionBookAddedToCart
                | ActionBookRemovedFromCart
                | ActionAllBooksRemovedFromCart;

export type {
    IBook,
    ICartItem,
    AppState,
    AppActions
}