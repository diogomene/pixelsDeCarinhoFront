import getEntradas from "../services/EntradasService";
import getSaidas from "../services/SaidasService";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import "./Transparency.css";

function Transparency() {
    const [Entradas, setEntradas] = useState<Entrada[]>([]);
    const [Saidas, setSaidas] = useState<Saida[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchEntradas = async () => {
        try {
            const response: AxiosResponse<Entrada[], any> = await getEntradas();
            if (response && response.data) {
                setEntradas(response.data);
            } else {
                setError("Resposta da API vazia ou inválida para entradas.");
            }
        } catch (error) {
            console.error("Erro ao buscar entradas:", error);
            setError(
                "Erro ao buscar entradas. Consulte o console para mais detalhes."
            );
        }
    };

    const fetchSaidas = async () => {
        try {
            const responsex: AxiosResponse<Saida[], any> = await getSaidas();
            if (responsex && responsex.data) {
                setSaidas(responsex.data);
            } else {
                setError("Resposta da API vazia ou inválida para saídas.");
            }
        } catch (error) {
            console.error("Erro ao buscar saídas:", error);
            setError(
                "Erro ao buscar saídas. Consulte o console para mais detalhes."
            );
        }
    };

    useEffect(() => {
        fetchEntradas();
        fetchSaidas();
    }, []);

    return (
        <PageContainer>
            <Paper>
                <div>
                    <h1 className="entradas-title">Entradas</h1>
                    {error && <p>{error}</p>}
                    <div className="page-transparency">
                        <table className="table-entradas">
                            <thead>
                                <tr>
                                    <th>Nome do Doador</th>
                                    <th className="text-center data-hora">Data e Hora</th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Entradas.map((a) => (
                                    <tr key={a._id}>
                                        <td className="nome-doador">{a.nomeDoador}</td>
                                        <td className="text-center data-hora">{a.dataHora}</td>
                                        <td className="text-right">
                                            {a.valor.toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="tr-total">
                                    <td className="font-bold no-border-right" colSpan={1}>
                                        Valor Total
                                    </td>
                                    <td className="text-right font-bold no-border-left" colSpan={2}>
                                        {Entradas.reduce(
                                            (total, entrada) =>
                                                total + entrada.valor,
                                            0
                                        ).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr className="separator" />
                <div>
                    <h1 className="saidas-title">Saídas</h1>
                    {error && <p>{error}</p>}
                    <div className="page-transparency">
                        <table className="table-entradas">
                            <thead>
                                <tr>
                                    <th>Destino</th>
                                    <th>Descrição</th>
                                    <th className="text-center data-hora">Data e Hora</th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Saidas.map((saida) => (
                                    <tr key={saida._id}>
                                        <td>{saida.destino}</td>
                                        <td>{saida.descricao}</td>
                                        <td className="text-center data-hora">{saida.dataHora}</td>
                                        <td className="text-right">
                                            {saida.valor.toLocaleString(
                                                "pt-BR",
                                                {
                                                    style: "currency",
                                                    currency: "BRL",
                                                }
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="tr-total">
                                    <td className="font-bold no-border-right" colSpan={2}>
                                        Valor Total
                                    </td>
                                    <td className="text-right font-bold no-border-left" colSpan={2}>
                                        {Saidas.reduce(
                                            (total, saida) =>
                                                total + saida.valor,
                                            0
                                        ).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default Transparency;
