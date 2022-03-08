const booksLoaded = (newBook: object[]) => {
    return {
        type: 'BOOK_LOADED',
        payload: newBook
    }
}

export {
    booksLoaded
}