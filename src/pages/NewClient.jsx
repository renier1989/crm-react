import { useNavigate } from "react-router-dom";

function NewClient() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between mb-10 items-center">
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
        <p>Here will go the form</p>
      </div>
    </>
  );
}

export default NewClient;
