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
    BOOKS_LOADED = "BOOKS_LOADED",
    BOOKS_REQUESTED = "BOOKS_REQUESTED",
    BOOKS_ERROR = "BOOKS_ERROR"
}

interface ActionBooksLoaded {
    type: AppActionsTypes.BOOKS_LOADED;
    payload?: any
}

interface ActionBooksRequested {
    type: AppActionsTypes.BOOKS_REQUESTED;
}

interface ActionBooksError {
    type: AppActionsTypes.BOOKS_ERROR;
    payload?: any
}

type AppActions = ActionBooksLoaded | ActionBooksRequested | ActionBooksError

export type {
    IBook,
    AppState,
    AppActions
}