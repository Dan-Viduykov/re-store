import { AppActions, AppActionsTypes, AppState } from "../../types/appReducer";

const initialState: AppState = {
    books: [],
    loading: true
}

export const appReducer = (state = initialState, action: AppActions) => {

    switch (action.type) {
        case AppActionsTypes.BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false
            }

        default:
            return state;
    }
}