import logo from "../../assets/img/logo.svg"
import "./styles.css"

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="Logo Image" />
                <h1>Controle de Despesas</h1>
                <p>Desenvolvido por Huggo Parcelly</p>
            </div>
        </header>
    )
}