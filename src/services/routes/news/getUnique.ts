import { api } from "../../../config/axios";

export async function GetUniqueNews(id: string | undefined) {
    
    try{
    const response = await api.get(`/news/${id}`);
    console.log("data: ", response)
    const data = response.data

    return {
        response: data?.response ?? data?.news ?? data ?? null,
    }

    }catch(error){
        console.log("Erro ao pegar noticia:",error)
    }
  }
