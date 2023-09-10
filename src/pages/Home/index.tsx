import Expenses from "../../components/Expenses"
import Header from "../../components/Header"
import "./styles.css"

export default function Home() {
    return (
        <main>
            <Header />
            <Expenses />
        </main>
    )
}