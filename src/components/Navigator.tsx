import './Navigator.css';

function Navigator() {
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/aboutus">Sobre nós</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigator;