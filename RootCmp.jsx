
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"

export function RootCmp() {
    return (
        <section className="app main-layout">
            <AppHeader />
            <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />}/>

                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:carId" element={<BookDetails />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book/edit/:bookId" element={<Bookdit />} />
                    </Routes>
            </main>
        </section>
    )
}