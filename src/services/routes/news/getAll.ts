import { api } from "@/config/axios";


export async function GetAllNews(){
    
    try{
    const response = await api.get("/news");
    console.log("data: ", response)
    const data = response.data

    return {
        response: data?.response ?? data?.news ?? data ?? [],
    }

    }catch(error){
        console.log("Erro ao pegar noticias:",error)
    }
  } 
