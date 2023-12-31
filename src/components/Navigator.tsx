import "./Navigator.css";
import Logo from "../assets/pixels-logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from "react";

function Navigator() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const toggleMenu = () => {
        console.log("aosdjiopajsdiojasdi")
        if (menuRef.current) {
            if(!menuOpen){
                menuRef.current!.style.display = "flex";
                menuRef.current.classList.remove("unactive");
                menuRef.current.classList.add("active");
                setMenuOpen(true);
            }else{
                menuRef.current.classList.remove("active");
                menuRef.current.classList.add("unactive");
                setTimeout(() => {
                    menuRef.current!.style.display = "none";
                }, 500);
                setMenuOpen(false);
            }
        }
        
    }
    return (
        <nav className="navbar">
            <a className="logo-container" href="/">
                <img
                    className="imagem-logo"
                    src={Logo}
                    alt="Logo"
                ></img>
            </a>
            <ul ref={menuRef}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/help">Como ajudar?</a>
                    </li>
                    <li>
                        <a href="/about-us">Quem somos?</a>
                    </li>
                    <li>
                        <a href="/transparency">Portal Transparente</a>
                    </li>
                    <li>
                        <a href="/galeria">Galeria de fotos</a>
                    </li>
                    <li>
                        <a href="/contact">Entre em contato</a>
                    </li>
            </ul>
            <div className="menuContainer">
                <FontAwesomeIcon icon={faBars} className="icon" color="white" onClick={toggleMenu}/>
            </div>
        </nav>
    );
}

export default Navigator;
