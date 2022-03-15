import { IBook } from "../../types/appReducer"

export default class BookstoreService {
    getBooks(): IBook[] {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                coverImage: 'https://m.media-amazon.com/images/I/71kPW3SLQSL._AC_UY218_.jpg' },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: 45,
                coverImage: 'https://m.media-amazon.com/images/I/711kreNLLNL._AC_UY218_.jpg'},
        ]
    }
} 