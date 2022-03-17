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
}

export enum AppActionsTypes {
    BOOKS_LOADED = "BOOKS_LOADED",
    BOOKS_REQUESTED = "BOOKS_REQUESTED"
}

interface ActionBooksLoaded {
    type: AppActionsTypes.BOOKS_LOADED;
    payload?: any
}

interface ActionBooksRequested {
    type: AppActionsTypes.BOOKS_REQUESTED;
}

type AppActions = ActionBooksLoaded | ActionBooksRequested

export type {
    IBook,
    AppState,
    AppActions
}