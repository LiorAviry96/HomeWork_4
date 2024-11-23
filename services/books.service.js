import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createCars()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
}

// For Debug (easy access from console):
// window.cs = carService

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }

            if (filterBy.minSpeed) {
                books = books.filter(book => book.price >= filterBy.price)
            }

            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', decription = '', price = '' ) {
    return { title, decription, price  }
}

function getDefaultFilter(filterBy = { txt: '', price: 0 }) {
    return { txt: filterBy.txt, price: filterBy.price }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        const titles = ['book1', 'book2', 'book3', 'book4']
        for (let i = 0; i < 6; i++) {
            const title = titles[utilService.getRandomIntInclusive(0, titles.length - 1)]
            books.push(_createBook(title, utilService.getRandomIntInclusive(80, 300)))
        }
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, price = 50) {
    const book = getEmptyCar(title, price)
    book.id = utilService.makeId()
    return book
}
