import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import Pix from "../assets/pix.jpeg";
import "./Help.css";

function Help() {
    return (
        <PageContainer>
            <div className="container-help">
                <Paper>
                    <div className="help">
                        <h2>Como ajudar nas nossas missões?</h2>
                        <br />
                        <p>
                            <strong>Doe Itens Especiais: </strong>
                            Contribua com brinquedos, roupas ou material
                            escolar.
                        </p>
                        <br />
                        <p>
                            <strong>Organize um Ponto de Coleta: </strong>
                            Torne-se um ponto de coleta em sua comunidade para
                            receber doações.
                        </p>
                        <br />
                        <p>
                            <strong>Doação Financeira: </strong>
                            Contribua com uma doação financeira para apoiar
                            nossas iniciativas.
                        </p>
                        <br />
                        <div className="donate">
                            <h3>Doações Financeiras através do Pix</h3>
                            <br />
                            <h4>Escaneie o QR Code abaixo:</h4>
                            <br />
                            <div className="folder-pix">
                                <img
                                    className="imagem-pix"
                                    src={Pix}
                                    alt="Pix"
                                />
                            </div>
                            <br />
                            <p>
                                Ou digite a chave PIX:{" "}
                                <strong>pixelsdecarinho@gmail.com</strong>
                            </p>
                            <br />
                            <br />
                            <h3>Divulgue nas redes sociais!</h3>
                            <p>@pixelsdecarinho</p>
                            <br />
                            <p>Faça parte desta corrente do bem. =) </p>
                            <br />
                        </div>
                    </div>
                </Paper>
                <br />
            </div>
        </PageContainer>
    );
}

export default Help;
