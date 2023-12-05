import getEntradas from "../services/EntradasService";
import getSaidas from "../services/SaidasService";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import { useEffect, useState } from "react";
import "./Transparency.css";

function Transparency() {
    const [Entradas, setEntradas] = useState<Entrada[]>([]);
    const [Saidas, setSaidas] = useState<Saida[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchEntradas = async () => {
        try {
            const response = await getEntradas();
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
            const responsex = await getSaidas();
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

    const agruparPorNome = (lista: Entrada[]) => {
    return lista.reduce<{
        [key: string]: { somaValores: number; dataMaisRecente: Date; nomeDoador: string, quantidadeDoacoes: number };
    }>((agrupado, item) => {
        const chave = item.nomeDoador;

        if (!agrupado[chave]) {
            agrupado[chave] = {
                somaValores: 0,
                dataMaisRecente: new Date(0),
                nomeDoador: item.nomeDoador,
                quantidadeDoacoes: 0
            };
        }

        agrupado[chave].somaValores += item.valor;

        // Ajuste na conversão da string para Date
        const dataItem = new Date(
            item.dataHora.replace(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}:\d{2})/, '$3-$2-$1T$4:00')
        );

        if (dataItem.getTime() > agrupado[chave].dataMaisRecente.getTime()) {
            agrupado[chave].dataMaisRecente = dataItem;
        }

        agrupado[chave].quantidadeDoacoes++;

        return agrupado;
    }, {} as { [key: string]: { somaValores: number; dataMaisRecente: Date; nomeDoador: string; quantidadeDoacoes: number } });
};


    const ordenarPorDataMaisRecente = (agrupado: {
        [key: string]: {
            somaValores: number;
            dataMaisRecente: Date;
            nomeDoador: string;
            quantidadeDoacoes: number;
        };
    }) => {
        return Object.values(agrupado).sort(
            (a, b) => b.dataMaisRecente.getTime() - a.dataMaisRecente.getTime()
        );
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
                                    <th className="text-center">
                                       Qtd Doação | Última Doação
                                    </th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordenarPorDataMaisRecente(
                                    agruparPorNome(Entradas)
                                ).map((agrupado) => (
                                    <tr
                                        key={
                                            agrupado.nomeDoador
                                        }
                                    >
                                        <td>{agrupado.nomeDoador}</td>                                        
                                        <td className="text-center">
                                           ({agrupado.quantidadeDoacoes}) {agrupado.dataMaisRecente.toLocaleString()}
                                        </td>
                                        <td className="text-right">
                                            {agrupado.somaValores.toLocaleString(
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
                                    <td
                                        className="font-bold no-border-right"
                                        colSpan={2}
                                    >
                                        Valor Total
                                    </td>
                                    <td
                                        className="text-right font-bold no-border-left"
                                        colSpan={2}
                                    >
                                        {ordenarPorDataMaisRecente(
                                            agruparPorNome(Entradas)
                                        )
                                            .reduce(
                                                (total, agrupado) =>
                                                    total +
                                                    agrupado.somaValores,
                                                0
                                            )
                                            .toLocaleString("pt-BR", {
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
                                    <th className="text-center data-hora">
                                        Data e Hora
                                    </th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Saidas.map((saida) => (
                                    <tr key={saida._id}>
                                        <td>{saida.destino}</td>
                                        <td>{saida.descricao}</td>
                                        <td className="text-center data-hora">
                                            {saida.dataHora}
                                        </td>
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
                                    <td
                                        className="font-bold no-border-right"
                                        colSpan={2}
                                    >
                                        Valor Total
                                    </td>
                                    <td
                                        className="text-right font-bold no-border-left"
                                        colSpan={2}
                                    >
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
