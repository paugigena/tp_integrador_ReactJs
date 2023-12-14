import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";
import Loading from "../Components/Loading";
function Detalle() {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);

    return (
    <Loading loading = {loading}>

      <div>
        <h1>{producto.title}</h1>
        <p>$ {producto.price}</p>
        <p>{producto.condition}</p>
        <p>{producto.resumen}</p>
        
      </div>


    </Loading>

);
  
}

export default Detalle;
