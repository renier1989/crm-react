import { useLoaderData } from "react-router-dom";
import ClientRow from "../components/ClientRow";
import { getClients } from "../data/clients";

export function loader() {
  const clients = getClients();
  return clients;
  
}

function Index() {
  const data_clients = useLoaderData();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your Clients</p>

      {data_clients.length > 0 ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data_clients.map(client => (
              <ClientRow
                client={client}
                key={client.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Clients registered.</p>
      )}
    </>
  );
}

export default Index;
