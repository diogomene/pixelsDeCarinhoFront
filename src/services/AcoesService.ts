import axios, { AxiosResponse } from 'axios';
import uri from '../constants';

async function getAcoes(): Promise<AxiosResponse<Acao[], any>> {
    try {
        const response = await axios.get<Acao[]>(`${uri}/acoes`);
        if (response && response.data) {
            return response;
        } else {
            throw new Error('Resposta da API vazia ou inválida.');
        }
    } catch (error) {
        console.error('Erro ao buscar ações:', error);
        throw new Error('Erro ao buscar ações. Consulte o console para mais detalhes.');
    }
}

export default getAcoes;