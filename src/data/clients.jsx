export async function getClients(){
    const URL = import.meta.env.VITE_API_URL;
    const reponse = await fetch(URL);
    const result = await reponse.json();
    return result;
}

// this is for the editing
export async function getClient(id){
    const URL = `${import.meta.env.VITE_API_URL}/${id}`;
    const reponse = await fetch(URL);
    const result = await reponse.json();
    return result;
}

export async function addClient(data){
    try {
        const URL = import.meta.env.VITE_API_URL;
        const reponse = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        await reponse.json();
        
    } catch (error) {
        console.log(error);
    }
}