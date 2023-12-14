import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Registro from "../Pages/Registro.jsx";
import Login from "../Pages/Login.jsx";
import Detalle from "../Pages/Detalle.jsx";
import NotFound from "../Pages/NotFound.jsx";
import ProductosAlta from "../Pages/ProductosAlta.jsx";
import ProductosListado from "../Pages/ProductosListado.jsx";
import ProductosModificar from "../Pages/ProductosModificar.jsx";

function Public() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alta" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/producto/alta" element={<ProductosAlta />} />
      <Route path="/producto/listado" element={<ProductosListado />} />
      <Route path="/producto/modificar/:id" element={<ProductosModificar />} />
      <Route path="/productos/:id" element={<Detalle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Public;
