import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="text-5xl font-bold text-gray-600">This is the nav</nav>
      {/* esto me permite pasarle los hijos definidos en el createBrowserRouter  */}
      <Outlet />
    </div>
  );
}

export default Layout;
