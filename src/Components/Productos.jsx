import { useEffect, useState } from "react";
import Producto from "./Producto.jsx";
import { getAllProductos } from "../Services/productosService.js";
import Row from 'react-bootstrap/Row';
import Loading from "./Loading.jsx";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState('');

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAllProductos(buscar);
        console.log(
          response
        );
        setProductos(response.docs);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [buscar]);

  const filtrarProducto = () => {
    setProductos([
      {
         id: eeC9h8cKK7kfwirNrpv4,
        title: "Nunca llegamos a la India",
        price: "$100",
      },
    ]);
  };

  const handleBuscar = (event) =>{
  const value = event.target.value
  setBuscar (value);
  };

  return (<Loading loading ={loading}>

          <div>
            {/* <input value ={buscar} onChange={handleBuscar}></input> */}
            <Row>
            {productos.map((producto) => (
              <Producto
                key={producto.id}
                title={producto.data().title}
                price={producto.data().price}
                id={producto.id}
                thumbnail = {producto.data().thumbnail}
                resumen = {producto.data().resumen}
                
              />
            ))}
            </Row>
            {/* <button onClick={filtrarProducto}>Filtrar producto</button> */}
          </div>

  </Loading>
  );

}

export default Productos;
