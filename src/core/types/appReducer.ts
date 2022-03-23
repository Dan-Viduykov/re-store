interface IBook {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

interface ICartItem {
    id: number,
    name: string,
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

type AppActions = ActionBooksLoaded | ActionBooksRequested | ActionBooksError | ActionBookAddedToCart;

export type {
    IBook,
    ICartItem,
    AppState,
    AppActions
}