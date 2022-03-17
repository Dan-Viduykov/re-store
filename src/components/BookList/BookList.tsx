import React, { useEffect } from "react";
import './BookList.css'
import BookListItem from "../BookListItem";
import { AppState } from "../../core/types/appReducer";
import { booksLoaded, booksRequested } from "../../core/store/actions";
import { connect } from "react-redux"
import { WithBooksroreService } from "../Hoc" 
import { compose } from "../../core/utils"
import Spinner from "../Spinner";

interface BookListProps extends AppState {
    bookstoreService: any;
    booksLoaded: any;
    booksRequested: any;
}

const BookList: React.FC<BookListProps> = (props) => {
    const { books, loading, bookstoreService, booksLoaded, booksRequested } = props;
    
    useEffect(() => {
        booksRequested();
        bookstoreService.getBooks().then(booksLoaded)
    }, [])

    if (loading) return <Spinner /> 

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

const mapStateToProps = ({ books, loading }: AppState) => {
    return { books, loading }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}

export default compose(
    WithBooksroreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)