import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error.message);
  return (
    <div className="space-y-8">
        <p className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clients</p>
        <p className="text-center text-3xl">Ups - something went worng.</p>
        <p className="text-center">{error.statusText || error.message}</p>
    </div>
  )
}
