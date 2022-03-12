interface IBook {
    id: number,
    title: string,
    author: string
}

interface AppState {
    books: IBook[];
}

export enum AppActionsTypes {
    BOOKS_LOADED = "BOOKS_LOADED",
}

interface ActionBooksLoaded {
    type: AppActionsTypes.BOOKS_LOADED;
    payload?: any
}

type AppActions = ActionBooksLoaded

export type {
    IBook,
    AppState,
    AppActions
}