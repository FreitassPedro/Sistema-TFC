import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Lista from "./pages/Lista";
import ListaAdmin from "pages/ListaAdmin";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/lista/Admin" element={<ListaAdmin />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
