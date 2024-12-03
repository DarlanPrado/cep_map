import { DataCep } from "@/types/cepService";
import { api } from "../api/api";

export const getDataCep = async (cep: string) => {
    try {
        const response = await api.get<DataCep>(`cep/v2/${cep}`)
        return response
    }catch (e) {
        console.log(`[SEVICE] Erro ao buscar o cep: ${e}`);
        throw e;
    }
}