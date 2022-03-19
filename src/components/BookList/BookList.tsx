import React, { Dispatch, useEffect } from "react";
import './BookList.css'
import BookListItem from "../BookListItem";
import { AppActions, AppState } from "../../core/types/appReducer";
import { fetchBooks } from "../../core/store/actions";
import { connect } from "react-redux"
import { WithBooksroreService } from "../Hoc" 
import { compose } from "../../core/utils"
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

interface BookListProps extends AppState {
    fetchBooks: any;
}

const BookList: React.FC<BookListProps> = (props) => {
    const { books, loading, error, fetchBooks } = props;
    
    useEffect(() => {
        fetchBooks();
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

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps: any) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}

export default compose(
    WithBooksroreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)