import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { getClient } from "../data/clients";
import RegisterForm from "../components/RegisterForm";
import Errors from "../components/Errors";

export async function loader({ params }) {
  const client = await getClient(params.clientId);
  if (Object.keys(client).length === 0) {
    throw new Response("", {
      status: 400,
      statusText: "Client not found",
    });
  }
  return client;
}

function EditClient() {
  const client = useLoaderData()
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between mb-20 items-center">
        <div>
          <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
          <p className="mt-3">
            Update the information about the client
          </p>
        </div>
        <div>
          <button
            className="bg-blue-800 text-white px-3 py-1 font-bold uppercase hover:bg-blue-700 hover:animate-pulse"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {/* {errors?.length &&
          errors.map((error, i) => <Errors key={i}>{error}</Errors>)} */}
        <Form method="post">
          <RegisterForm  client={client} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer animation hover:bg-blue-700 duration-500"
            value="Register"
          />
        </Form>
      </div>
    </>
  );
}

export default EditClient;
