import { Form, useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export function action(){
  console.log('submit del formulario');
  return null;
}

function NewClient() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between mb-20 items-center">
        <div>
          <h1 className="font-black text-4xl text-blue-900">New Clients</h1>
          <p className="mt-3">
            Fill all the information to register a new client
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
        <Form
        method="post"
        
        >
          <RegisterForm />

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

export default NewClient;
