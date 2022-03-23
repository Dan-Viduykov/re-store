import React from "react";
import { IBook } from "../../core/types/appReducer";
import './BookListItem.css'

interface BookListItemProps {
    book: IBook;
    onAddedToCart: () => void
}

const BookListItem: React.FC<BookListItemProps> = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;

    return (
        <div className="book">
            <div className="book_cover">
                <img src={coverImage}
                    alt={title} />
            </div>
            <div className="book_details">
                <h4 className="book-title">{title}</h4>
                <h4 className="book-author">{author}</h4>
                <h4 className="book-price">{price}</h4>
                <button
                    onClick={onAddedToCart}
                    className="book_btn-add btn btn-info">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default BookListItem

