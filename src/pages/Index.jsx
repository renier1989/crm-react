import { useLoaderData } from "react-router-dom"


export function loader(){

  const clients = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clients;
}

function Index() {

  const data_clients = useLoaderData();
  console.log("🚀 ~ file: index.jsx:11 ~ Index ~ data:", data_clients)

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Clients</h1>
    <p className="mt-3">Manage your Clients</p>
    </>
  )
}

export default Index