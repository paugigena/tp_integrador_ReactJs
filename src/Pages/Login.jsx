import { useForm } from "react-hook-form";
import ButtonLoading from "../Components/ButtonLoading";
import Form from 'react-bootstrap/Form';
import {login} from "../Services/usuariosService";
import { useState } from "react";
// import  AlertMessage  from "../Components/AlertMessage";

function Login() {
  const [loading, setloading] = useState(false)
  // const [alert, setalert] = useState({variant: "", text:"", duration:0, link:"" })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) =>{
    try{
      setloading(true);
      const userId = await login(data?.email, data?.password);
      console.log(userId);
      setloading(false);
      //  setalert({variant: "success", text:"Login correcto", duration:2000, link:"/" });
      
    }catch(e){
      console.log(e);
      setloading(false);
      // setalert({variant: "danger", text: e.code==="auth/invalid-credential" ? "Los datos suministrados son incorrectos" : "Lo sentimos, ocurrio un error :("});
    }
    


  } ;

  return (
    <div>
      <h1>Loguearse</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingrese su direccion de email" {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            })} />
            {errors && errors?.email?.type === "required" && (
            <Form.Text className="text-danger">Este campo es obligatorio</Form.Text>
          )}
          {errors && errors?.email?.type === "pattern" && (
              <Form.Text className="text-danger">No es un email valido</Form.Text>
          )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" 
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 14,
            })} />

          {errors && errors?.password?.type === "required" && (
            <Form.Text className="text-danger">Este campo es obligatorio</Form.Text>
          )}
          {errors && errors?.password?.type === "minLength" && (
            <Form.Text className="text-danger">Debe introducir al menos 8 caracteres</Form.Text>
          )}
          {errors && errors?.password?.type === "maxLength" && (
            <Form.Text className="text-danger">No debe superar los 14 caracteres</Form.Text>
          )}
      </Form.Group>
    
      <ButtonLoading loading={loading}>Ingresar</ButtonLoading>
    </Form>
     
    </div>
  );
}

export default Login;
