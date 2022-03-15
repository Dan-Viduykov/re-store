import React from "react";
import { IBook } from "../../core/types/appReducer";
import './BookListItem.css'

interface BookListItemProps {
    book: IBook
}

const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
    const { title, author } = book;

    return <>
        <span>{title}</span>
        <span>{author}</span>
    </>
}

export default BookListItem

