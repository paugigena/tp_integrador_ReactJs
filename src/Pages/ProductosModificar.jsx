import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getById, update } from "../Services/productosService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";





function ProductosModificar() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("price", response.data().price);
        setValue("thumbnail", response.data().thumbnail);
        setValue("condition", response.data().condition);
        setValue("resumen", response.data().resumen);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);



  const onSubmit = async (data) =>{
    try{
      const document = await update(id, data);
      console.log(document);
    }catch(e){
      console.log(e);
    }
    
  } ;

  if(loading){<div>Cargando..</div>
  }else{
    return (
      <div>
    
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formName">
  
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre del producto" {...register("title", { required: true })} />
          {errors && errors?.nombre && (<Form.Text className="text-danger">Este campo es obligatorio</Form.Text>)}
        </Form.Group>
         
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el precio" {...register("price")} />  
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen </Form.Label>
          <Form.Control type="text" placeholder="Ingrese url imagen" {...register("thumbnail", {required: true,})} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formCondition">
          <Form.Label>Condicion</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la condicion del producto" {...register("condition")} />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formResumen">
          <Form.Label>Sinopsis</Form.Label>
          <Form.Control type="text" placeholder="Ingrese un breve resumen" {...register("resumen")} />  
        </Form.Group>
      
      
        <Button type="submit" variant = "success">Guardar</Button>
      </Form>
  
      
       
      </div>
    );
  }

  }

  

export default ProductosModificar;
