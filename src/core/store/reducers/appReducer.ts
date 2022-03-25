import { AppActions, AppActionsTypes, AppState, IBook, ICartItem } from "../../types/appReducer";

const initialState: AppState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}

const updateCartItem = (book: IBook, item: Partial<ICartItem> = {}, quantity: number) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;

   
    return {
        id, 
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}

const updateCartItems = (cartItems: ICartItem[], item: ICartItem, idx: number) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1) 
        ]
    }

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

const updateOrder = (state: AppState, bookId: number, quantity: number) => {
    const { books, cartItems } = state
    
    const book: IBook = books.find(({ id }) => id === bookId)!;
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity)
    
    return {
        ...state,
        cartItems: updateCartItems(state.cartItems, item, itemIndex)
    };
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
            };

        case AppActionsTypes.BOOK_ADDED_TO_CART:
            return updateOrder(state, action.payload!, 1)
            
        case AppActionsTypes.BOOK_REMOVED_FROM_CART:
            return updateOrder(state, action.payload!, -1)
            
        case AppActionsTypes.ALL_BOOKS_REMOVED_FROM_CART:
            const item = state.cartItems.find(({ id }) => id === action.payload)
            return updateOrder(state, action.payload!, -item?.count!)

        default:
            return state;
    }
}

export default appReducer