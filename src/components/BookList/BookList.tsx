import React, { Dispatch, useEffect } from "react";
import './BookList.css'
import BookListItem from "../BookListItem";
import { AppActions, AppState, IBook } from "../../core/types/appReducer";
import { fetchBooks } from "../../core/store/actions";
import { connect } from "react-redux"
import { WithBooksroreService } from "../Hoc" 
import { compose } from "../../core/utils"
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

interface BookListProps {
    books: IBook[]
}

const BookList: React.FC<BookListProps> = ({ books }) => {
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

interface BookListContainerProps extends AppState {
    fetchBooks: any;
}

const BookListContainer: React.FC<BookListContainerProps> = (props) => {
    const { books, loading, error, fetchBooks } = props;
    
    useEffect(() => {
        fetchBooks();
    }, [])

    if (loading) return <Spinner /> 
    if (error) return <ErrorIndicator />

    return <BookList books={books} />;                          
}

const mapStateToProps = ({ books, loading, error }: AppState) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: any) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}

export default compose(
    WithBooksroreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)