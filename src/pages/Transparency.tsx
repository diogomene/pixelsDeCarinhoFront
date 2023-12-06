import getSaidas from "../services/SaidasService";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import { useEffect, useState } from "react";
import "./Transparency.css";
import TableMaster from "../components/tables/TableMaster";
import getEntradas from "../services/EntradasService";
import { Dictionary, Many, ValueIteratee, groupBy, orderBy } from "lodash";

function Transparency() {
    const [Entradas, setEntradas] = useState<Dictionary<Base[]>>({});
    const [Saidas, setSaidas] = useState<Dictionary<Base[]>>({});
    const [error, setError] = useState<string | null>(null);

    const fetchEntradas = async () => {
        try {
            const response = await getEntradas();
            if (response && response.data) {
                const entradas = normalizeData(response.data.map(convertEntradas))
                setEntradas(entradas);
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
                const saidas = normalizeData(responsex.data.map(convertSaidas))
                setSaidas(saidas);
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

    const convertSaidas = ({ dataHora, descricao, destino, valor }: Saida): Base => ({ data: dataHora, descricao, destino, valor })
    const convertEntradas = ({ dataHora, nomeDoador, valor }: Entrada): Base => ({ data: dataHora, destino: nomeDoador, valor })


    const normalizeData = (
        values: Base[],
        order: Many<ValueIteratee<Base>> = ['destino', 'data'],
        group: ValueIteratee<Base> = 'destino'): Dictionary<Base[]> => {
        const ordered: any = orderBy(values, order)
        return groupBy<Base>(ordered, group)
    }

    useEffect(() => {
        fetchEntradas()
        fetchSaidas();
    }, []);

    return (
        <PageContainer>
            <Paper>
                <div>
                    <h1 className="entradas-title">Entradas</h1>
                    {error && <p>{error}</p>}
                    <div className="page-transparency">
                        <TableMaster data={Entradas} />
                    </div>
                </div>
                <hr className="separator" />
                <div>
                    <h1 className="saidas-title">Saídas</h1>
                    {error && <p>{error}</p>}
                    <div className="page-transparency">
                        <TableMaster data={Saidas} showDescricao={true} />
                    </div>
                </div>
            </Paper>
        </PageContainer>
    );
}

export default Transparency;
