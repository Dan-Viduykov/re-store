import { AppActions, AppActionsTypes, AppState, IBook, ICartItem } from "../../types/appReducer";

const initialState: AppState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}

const updateCartItem = (book: IBook, item: Partial<ICartItem> = {}) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;

   
    return {
        id, 
        title,
        count: count + 1,
        total: total + book.price
    }
}

const updateCartItems = (cartItems: ICartItem[], item: ICartItem, idx: number) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const appReducer = (state = initialState, action: AppActions) => {

    console.log(action.type);

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
            const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(book, item)
           
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, item, itemIndex)
            }

        default:
            return state;
    }
}

export default appReducer