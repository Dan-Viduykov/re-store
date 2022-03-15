import React, { useEffect } from "react";
import './BookList.css'
import BookListItem from "../BookListItem";
import { AppState, IBook } from "../../core/types/appReducer";
import { booksLoaded } from "../../core/store/actions";
import { connect } from "react-redux"
import { WithBooksroreService } from "../Hoc" 
import { compose } from "../../core/utils"

interface BookListProps {
    books: IBook[];
    bookstoreService: any;
    booksLoaded: any;
}

const BookList: React.FC<BookListProps> = (props) => {
    const { books, bookstoreService, booksLoaded } = props;
    
    useEffect(() => {
        const data = bookstoreService.getBooks();
        console.log(data);
        booksLoaded(data)
    }, [])

    return (
        <ul>{
            books.map((book) => {
                return (
                    <li key={book.id}><BookListItem book={book} /></li>
                )
            })
        }</ul>    
    )
}

const mapStateToProps = ({ books }: AppState) => {
    return { books }
}

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    WithBooksroreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)