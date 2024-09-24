import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Lista from "./pages/Lista";
import ListaAdmin from "pages/ListaAdmin";
import IngressoCodigo from "pages/IngressoImpresso";
import QRCodeReader from "components/ScannerQRCode";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/admin/lista" element={<ListaAdmin />} />
        <Route path="/ingresso/:codigoConsumivel" element={<IngressoCodigo />} />
        <Route path="/ingresso/scan" element={<QRCodeReader />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
