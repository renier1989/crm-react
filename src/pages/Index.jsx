export function loader(){
  return "From loader in Clients"
}

function Index() {
  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Clients</h1>
    <p className="mt-3">Manage your Clients</p>
    </>
  )
}

export default Index