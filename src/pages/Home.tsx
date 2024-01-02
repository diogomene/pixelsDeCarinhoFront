import { useEffect, useState } from "react";
import getAcoes from "../services/AcoesService";
import { AxiosResponse } from "axios";
import "./Home.css";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

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
            <div className="homePage-container">
                {error && <p>{error}</p>}

                {acoes.map((a) => (
                    <div>
                        <Paper>
                            <div key={a._id}>
                                <h1>{a.nome}</h1>
                                <p>
                                    Doe amor e solidariedade! Junte-se a nós
                                    nesta campanha especial de arrecadação! 🌟
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
                        </Paper>
                        <br />
                    </div>
                ))}
            </div>
        </PageContainer>
    );
}

export default Home;
