import "./Navigator.css";
import Logo from "../assets/pixels-logo.png";

function Navigator() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img
                        className="imagem-logo"
                        src={Logo}
                        alt="Logo"
                    ></img>
                </li>
                <div>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about-us">Sobre nós</a>
                    </li>
                    <li>
                        <a href="/transparency">Transparência</a>
                    </li>
                    {/* <li>
                        <a href="/photos">Galeria de fotos</a>
                    </li>
                    <li>
                        <a href="/promotional-material">Material de divulgação</a>
                    </li>*/}
                    <li>
                        <a href="/contact">Contato</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navigator;
