import { AppActions, AppActionsTypes, AppState } from "../../types/appReducer";

const initialState: AppState = {
    books: [],
    loading: true,
    error: null
}

export const appReducer = (state = initialState, action: AppActions) => {

    switch (action.type) {
        case AppActionsTypes.BOOKS_REQUESTED:
            return {
                books: [],
                loading: true,
                error: null
            };
        case AppActionsTypes.BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case AppActionsTypes.BOOKS_ERROR:
            return {
                books: [],
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}