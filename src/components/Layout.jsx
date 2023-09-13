import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clients
        </h2>
        <nav className="mt-10">
          <Link className="text-2xl block hover:text-blue-300 text-white" to="/">Home</Link>
          <Link className="text-2xl block hover:text-blue-300 text-white" to="/new/client">New Client</Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
