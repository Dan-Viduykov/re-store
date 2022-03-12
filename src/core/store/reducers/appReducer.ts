import { AppActions, AppActionsTypes, AppState } from "../../types/appReducer";

const initialState: AppState = {
    books: []
}

export const appReducer = (state = initialState, action: AppActions) => {

    switch (action.type) {
        case AppActionsTypes.BOOKS_LOADED:
            return {
                books: action.payload
            }

        default:
            return state;
    }
}