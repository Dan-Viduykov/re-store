import React, { useEffect } from "react";
import './BookList.css'
import BookListItem from "../BookListItem";
import { AppState } from "../../core/types/appReducer";
import { booksLoaded, booksRequested, booksError } from "../../core/store/actions";
import { connect } from "react-redux"
import { WithBooksroreService } from "../Hoc" 
import { compose } from "../../core/utils"
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

interface BookListProps extends AppState {
    bookstoreService: any;
    booksLoaded: any;
    booksRequested: any;
    booksError: any;
}

const BookList: React.FC<BookListProps> = (props) => {
    const { books, loading, error, bookstoreService, booksLoaded, booksRequested, booksError } = props;
    
    useEffect(() => {
        booksRequested();
        bookstoreService.getBooks()
            .then(booksLoaded)
            .catch(booksError)
    }, [])

    if (loading) return <Spinner /> 
    if (error) return <ErrorIndicator />

    return (
        <ul className="book-list">{
            books?.map((book) => {
                return (
                    <li className="book-list_item" key={book.id}><BookListItem book={book} /></li>
                )
            })
        }</ul>    
    )
}

const mapStateToProps = ({ books, loading, error }: AppState) => {
    return { books, loading, error }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
}

export default compose(
    WithBooksroreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)