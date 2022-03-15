import { IBook } from "../../types/appReducer"

export default class BookstoreService {
    getBooks(): IBook[] {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler' },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard' },
        ]
    }
} 