import { useLoaderData } from "react-router-dom";
import { getClient } from "../data/clients";

export async function loader({params}){
    const client = await getClient(params.clientId);
    if(Object.keys(client).length === 0){
        throw new Response ('',{
            status : 400,
            statusText: 'Client not found',
        })
    }
    return client;
}

function EditClient() {
    // const client = useLoaderData()
  return (
    <div>EditClient</div>
  )
}

export default EditClient