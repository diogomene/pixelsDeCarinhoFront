import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import Nathalia from "../assets/nathalia.png";
import Matheus from "../assets/matheus.png";
import Diogo from "../assets/diogo.png";
import Dayane from "../assets/dayane.jpg";
import Nando from "../assets/nando.png";
import Jeferson from "../assets/jeferson.jpg";
import Thiago from "../assets/thiago.jpg";

import "./About.css";

function AboutUs() {
    return (
        <PageContainer>
            <Paper>
                <div className="about-us-container">
                    <h1>Quem nós somos?</h1>
                    <br />

                    <div className="fotos">
                        <div className="container-foto">
                            <img
                                className="foto-perfil"
                                src={Nathalia}
                                alt="Nathalia"
                            />
                            <h4>Nathalia</h4>
                            <a
                                className="ig-about"
                                href="https://www.instagram.com/nathaliacosim"
                                target="_blank"
                            >
                                @nathaliacosim
                            </a>
                        </div>

                        <div className="container-foto">
                            <img
                                className="foto-perfil"
                                src={Matheus}
                                alt="Matheus"
                            />
                            <h4>Matheus Mota</h4>
                            <a
                                className="ig-about"
                                href="https://www.instagram.com/mota._.yay"
                                target="_blank"
                            >
                                @mota._.yay
                            </a>
                        </div>

                        <div className="container-foto">
                            <img
                                className="foto-perfil"
                                src={Diogo}
                                alt="Diogo"
                            />
                            <h4>Diogo Menezes</h4>
                            <a
                                className="ig-about"
                                href="https://www.instagram.com/di0go.menezes"
                                target="_blank"
                            >
                                @di0go.menezes
                            </a>
                        </div>
                    </div>
                    <br />
                    <div className="text-about-us">
                        <h3>
                            Somos uma comunidade formada por amigos apaixonados
                            pela area de tecnologia =){" "}
                        </h3>

                        <p>
                            Nossa missão é transformar pixels em sorrisos,
                            arrecadando: brinquedos, roupas, materiais escolares
                            e itens de higiene pessoal!
                        </p>

                        <p>
                            Nós escolheremos datas especiais para fazer as
                            entregas durante o ano todo.
                        </p>

                        <h3>
                            Faça parte dessa jornada e ajude-nos a colorir o
                            mundo com amor e solidariedade!
                        </h3>

                        <p>
                            <strong>#PixelsDeCarinho</strong>
                        </p>
                    </div>
                </div>
            </Paper>

            <Paper>
                <div>
                    <h2>Colaboradores</h2>
                    <div className="fotos">
                        <div className="container-foto">
                            <img
                                className="foto-perfil"
                                src={Nando}
                                alt="Nando"
                            />
                            <h4>Nando</h4>
                            <p>Auxiliou no desenvolvimento do site.</p>
                        </div>

                        <div className="container-foto">
                            <img
                                className="foto-perfil"
                                src={Jeferson}
                                alt="Jeferson"
                            />
                            <h4>Jeferson</h4>
                            <p>Transporte e embalagem das doações.</p>
                        </div>

                        <div className="container-foto">
                            <img
                                className="foto-perfil"
                                src={Dayane}
                                alt="Dayane"
                            />
                            <h4>Dayane</h4>
                            <p>Transporte e embalagem das doações.</p>
                        </div>

                        <div className="container-foto">
                            <img
                                className="foto-perfil"
                                src={Thiago}
                                alt="Thiago"
                            />
                            <h4>Thiago</h4>
                            <p>Transporte e embalagem das doações.</p>
                        </div>
                    </div>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default AboutUs;
