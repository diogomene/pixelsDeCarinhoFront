import axios, { AxiosResponse } from 'axios';
import uri from '../constants';

async function getEntradas(): Promise<AxiosResponse<Entrada[], any>> {
    try {
        const response = await axios.get<Entrada[]>(`${uri}/entradas`);
        if (response && response.data) {
            return response;
        } else {
            throw new Error('Resposta da API vazia ou inválida.');
        }
    } catch (error) {
        console.error('Erro ao buscar entradas:', error);
        throw new Error('Erro ao buscar entradas. Consulte o console para mais detalhes.');
    }
}

export default getEntradas;