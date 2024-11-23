
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

                        <Route path="/car" element={<CarIndex />} />
                        <Route path="/car/:carId" element={<CarDetails />} />
                        <Route path="/car" element={<CarIndex />} />
                        <Route path="/car/:carId" element={<CarDetails />} />
                        <Route path="/car/edit" element={<CarEdit />} />
                        <Route path="/car/edit/:carId" element={<CarEdit />} />
                    </Routes>
            </main>
        </section>
    )
}