import { useEffect, useState } from "react";
import getAcoes from "../services/AcoesService";
import { AxiosResponse } from "axios";
import "./Home.css";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import Natal from "../assets/natal.jpeg";
import Pix from "../assets/pix.jpeg";

function Home() {
    const [acoes, setAcoes] = useState<Acao[]>([]);
    const [error, setError] = useState<string | null>(null);
    const fetchAcoes = async () => {
        try {
            const response: AxiosResponse<Acao[], any> = await getAcoes();
            if (response && response.data) {
                setAcoes(response.data);
            } else {
                setError("Resposta da API vazia ou inválida.");
            }
        } catch (error) {
            console.error("Erro ao buscar ações:", error);
            setError(
                "Erro ao buscar ações. Consulte o console para mais detalhes."
            );
        }
    };

    useEffect(() => {
        fetchAcoes();
    }, []);

    return (
        <PageContainer>
            <Paper>
                <div className="homePage-container">
                    {error && <p>{error}</p>}
                    {acoes.map((a) => (
                        <div key={a._id}>
                            <div className="folder-acao">
                                <img
                                    className="imagem-natal"
                                    src={Natal}
                                    alt="Natal"
                                />
                            </div>

                            <h1>{a.nome}</h1>
                            <p>
                                Doe amor e solidariedade! Junte-se a nós nesta
                                campanha especial de arrecadação! 🌟
                            </p>
                            <p>
                                <strong>Estamos arrecadando:</strong>{" "}
                                {a.arrecadacao}
                            </p>
                            <p>
                                <strong>O dia da ação será:</strong>{" "}
                                {a.dataHora}
                            </p>
                            <p>
                                <strong>A faixa etaria é:</strong>{" "}
                                {a.faixaEtaria}
                            </p>
                            <p>
                                <strong>Local:</strong> {a.local}
                            </p>
                            <p>
                                <strong>Detalhes: </strong> {a.observacoes}
                            </p>
                        </div>
                    ))}
                    <br />
                    <div className="help">
                        <h2>Como ajudar nesta missão?</h2>
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
                        </div>
                    </div>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default Home;
