//import { CarFilter } from "../cmps/CarFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { booksService } from "../services/books.service.js"
const { Link } = ReactRouterDOM

const { useEffect, useState } = React


export function BookIndex() {
    const [books, setBooks] = useState(null)
    //const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())

    // console.log('books:', books)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        booksService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.log('Problems getting books:', err)
            })
    }

    function onRemoveBook(bookId) {
        booksService.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))
            })
            .catch(err => {
                console.log('Problems removing book:', err)
            })
    }

    //function onSetFilter(filterBy) {
        // console.log('filterBy:', filterBy)
      //  setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    //}
    // console.log('index render');
    
    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <section>
                <Link to="/book/edit">Add Book</Link>
            </section>
            <BookList
                books={books}
                onRemoveBook={onRemoveBook}
            />
        </section>
    )

}