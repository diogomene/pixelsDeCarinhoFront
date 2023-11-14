import React, { useEffect, useState } from 'react';
import getAcoes from '../services/AcoesService';
import { AxiosResponse } from 'axios';

function Home() {
    const [acoes, setAcoes] = useState<Acao[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchAcoes = async () => {
        try {
            const response: AxiosResponse<Acao[], any> = await getAcoes();
            if (response && response.data) {
                setAcoes(response.data);
            } else {
                setError('Resposta da API vazia ou inválida.');
            }
        } catch (error) {
            console.error('Erro ao buscar ações:', error);
            setError('Erro ao buscar ações. Consulte o console para mais detalhes.');
        }
    };

    useEffect(() => {
        fetchAcoes();
    }, []);

    return (
        <div>
            <h1>Lista de Ações</h1>
            {error && <p>{error}</p>}
            <ul>
                {acoes.map((a) => (
                    <li key={a._id}>
                        <strong>{a.nome}</strong> - {a.local}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
