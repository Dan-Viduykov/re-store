interface IAppState {
    books: {}
}

interface ActionBooksLoaded {
    type: string,
    payload: object
}

type IActions = ActionBooksLoaded;

const initialState: IAppState = {
    books: []
}

const reducer = (state = initialState, action: IActions): IAppState => {

    switch (action.type) {
        case 'BOOK_LOADED':
            return {
                books: action.payload
            }
        
        default:
            return state;
    }
}

export default reducer;