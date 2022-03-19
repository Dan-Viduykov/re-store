interface IBook {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

interface AppState {
    books: IBook[];
    loading: boolean;
    error: Error | null;
}

export enum AppActionsTypes {
    FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE"
}

interface ActionBooksLoaded {
    type: AppActionsTypes.FETCH_BOOKS_SUCCESS;
    payload?: any
}

interface ActionBooksRequested {
    type: AppActionsTypes.FETCH_BOOKS_REQUEST;
}

interface ActionBooksError {
    type: AppActionsTypes.FETCH_BOOKS_FAILURE;
    payload?: any
}

type AppActions = ActionBooksLoaded | ActionBooksRequested | ActionBooksError

export type {
    IBook,
    AppState,
    AppActions
}