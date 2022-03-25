import React, { Dispatch, FC, useEffect } from "react";
import './BookList.css'
import BookListItem from "../BookListItem";
import { AppActions, AppState, IBook } from "../../core/types/appReducer";
import { fetchBooks } from "../../core/store/actions";
import { connect } from "react-redux"
import { WithBooksroreService } from "../Hoc" 
import { compose } from "../../core/utils"
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import BookstoreService from "../../core/services/BookstoreService";

interface BookListProps {
    books: IBook[];
    onAddedToCart: (id: number) => void
}

const BookList: FC<BookListProps> = ({ books, onAddedToCart }) => {
    console.log(books);
    return (
        <ul className="book-list">
            {
                books?.map((book) => {
                    return (
                        <li key={book.id}>
                                <BookListItem
                                    book={book}
                                    onAddedToCart={() => onAddedToCart(book.id)}
                                />
                        </li>
                    )
                })
            }
        </ul>    
    )
} 

interface BookListContainerProps extends AppState {
    fetchBooks: () => void;
    onAddedToCart: () => void
}

const BookListContainer: FC<BookListContainerProps> = (props) => {
    const { books, loading, error, fetchBooks, onAddedToCart } = props;
    
    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <Spinner /> 
    if (error) return <ErrorIndicator />

    return <BookList books={books} onAddedToCart={onAddedToCart} />;                          
}

const mapStateToProps = ({ books, loading, error }: AppState) => {
    return { books, loading, error }
}

interface OwnProps {
    bookstoreService: BookstoreService;
    bookAddedToCart: (id: number) => any;
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: OwnProps) => {
    const { bookstoreService, bookAddedToCart } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id: number) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
    WithBooksroreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)