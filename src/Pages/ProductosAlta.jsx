import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {create} from "../Services/productosService";





function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) =>{
    try{
      const document = await create(data);
      console.log(document);
    }catch(e){
      console.log(e);
    }
    


  } ;

  return (
    <div>
      <h1>Alta de productos</h1>
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
        <Form.Control type="text" placeholder="Ingrese un breve resumen" {...register("condition")} />  
      </Form.Group>

      <Button type="submit" variant = "success">Guardar</Button>
    </Form>

    
     
    </div>
  );
}

export default ProductosAlta;
