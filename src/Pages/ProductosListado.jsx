import { useEffect, useState } from "react";
import { deleteProductos, getAllProductos } from "../Services/productosService.js";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function ProductosListado() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAllProductos()
        setProductos(response.docs);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, []);

  const handleEliminar = async (id)=>{
    try{
       await deleteProductos(id);
    }catch (e){
      console.log(e);
    }
    

  };


  if (loading) {
    return <div>Cargando ...</div>;
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre </th>
              <th>Precio </th>
            </tr>
          </thead>
          <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
                <td>{producto.data().title}</td>
                <td>$ {producto.data().price}</td>
                <td>
                <Button variant = "secondary" as={Link} to={`/producto/modificar/${producto.id}`}>Editar</Button>
                </td>
                <td>
                <Button variant = "danger" onClick={()=> handleEliminar(producto.id)}>Eliminar</Button>
                </td>
                
            </tr>
        
        ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductosListado;
