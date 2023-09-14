import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ClientRow({ client }) {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = client;
  return (
    <tr className="border-b">
      <td className="p-5 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-5 space-y-2">
        <p className=" text-gray-600"> <span className="text-gray-900 uppercase font-bold">Email: </span> {email}</p>
        <p className=" text-gray-600"> <span className="text-gray-900 uppercase font-bold">Phone: </span> {telefono}</p>
      </td>
      <td className="p-5 flex space-x-3">
        <button className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
        onClick={()=>navigate(`client/${id}/edit`)}
        >Edit</button>
        <button className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">Delete</button>
      </td>
    </tr>
  );
}

export default ClientRow;
