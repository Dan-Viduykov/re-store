import { AppActions, AppActionsTypes, AppState, IBook, ICartItem } from "../../types/appReducer";

const initialState: AppState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}

const appReducer = (state = initialState, action: AppActions) => {

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

        case AppActionsTypes.BOOK_ADDED_TO_CART:
            const bookId = action.payload;
            const book: IBook = state.books.find((book) => book.id === bookId)!;
            const newItem: ICartItem = {
                id: book.id,
                name: book.title,
                count: 1,
                total: book.price
            }

            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem
                ]
            }

        default:
            return state;
    }
}

export default appReducer