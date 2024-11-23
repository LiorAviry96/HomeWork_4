
export function BookPreview({ book }) {

    return (
        <article className="car-preview">
            <h2>Name: {book.title}</h2>
            <h4>Discription: {book.discription}</h4>
            <img src={`../assets/img/${book.thumbnail}.png`} alt="book-image" />
            <p>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</p>
        </article>
    )
}