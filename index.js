import { createRoot } from "react-dom/client"
import Header from "./Scrimba-Lessons/Header"
import MainContent from "./MainContent"
import Footer from "./Scrimba-Lessons/Footer"
const root = createRoot(document.getElementById("root"))

//NOTE THIS IS THE FIRST TO USE INDEX.CSS FILE YOU CREATED
/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
