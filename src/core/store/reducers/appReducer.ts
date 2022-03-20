import { AppActions, AppActionsTypes, AppState } from "../../types/appReducer";

const initialState: AppState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'book 1',
            count: 3,
            total: 150
        },
        {
            id: 2,
            name: 'book 2',
            count: 2,
            total: 70
        }
    ],
    orderTotal: 220
}

export const appReducer = (state = initialState, action: AppActions) => {

    switch (action.type) {
        case AppActionsTypes.FETCH_BOOKS_REQUEST:
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case AppActionsTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case AppActionsTypes.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}