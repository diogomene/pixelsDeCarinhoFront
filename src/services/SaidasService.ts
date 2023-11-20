import axios, { AxiosResponse } from 'axios';
import uri from '../constants';

async function getSaidas(): Promise<AxiosResponse<Saida[], any>> {
    try {
        const response = await axios.get<Saida[]>(`${uri}/saidas`);
        if (response && response.data) {
            return response;
        } else {
            throw new Error('Resposta da API vazia ou inválida.');
        }
    } catch (error) {
        console.error('Erro ao buscar saidas:', error);
        throw new Error('Erro ao buscar saidas. Consulte o console para mais detalhes.');
    }
}

export default getSaidas;