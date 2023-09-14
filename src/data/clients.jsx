export async function getClients(){
    const URL = import.meta.env.VITE_API_URL;
    const reponse = await fetch(URL);
    const result = await reponse.json();

    // console.log(result);
    return result;
}