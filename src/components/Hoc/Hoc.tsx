import React from "react";
import BookstoreService from "../../core/services/BookstoreService";
import { BookstoreServiceConsumer } from "../BookstoreServiceContext/BookstoreServiceContext";

export const WithBooksroreService = () => <T extends BookstoreService>(Wrapped: React.FC<T>) => {
    return (props: Pick<T, Exclude<keyof T, keyof BookstoreService>>) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props as T}
                                    bookstoreService={bookstoreService} />
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}