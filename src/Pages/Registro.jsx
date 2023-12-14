import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import {create} from "../Services/usuariosService";
import ButtonLoading from "../Components/ButtonLoading";
import { useState } from "react";
import Input from "../Components/Input";
import  AlertMessage  from "../Components/AlertMessage";;



function Registro() {
  const [loading, setloading] = useState(false)
  const [alert, setalert] = useState({variant: "", text:"", duration:0, link:"" })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) =>{
    try{
      setloading(true)
      const user = await create(data)
      console.log(user);
      setloading(false);
      setalert({variant: "success", text:"Usuario creado con exito!", duration:2000, link:"/login" });
    }catch(e){
      console.log(e);
      setloading(false);
      setalert({variant: "danger", text: e.code==="auth/email-already-in-use" ? "El email ya se encuentra registrado" : "Lo sentimos, ocurrio un error :("});
      
    }
    


  } ;

  return (
    <div>
      <h1>Registrarse</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input label = "Nombre" placeholder="Ingrese su nombre" register={{...register("nombre", { required: true })}} name="nombre"  errors= {errors}/>
   
       
       <Input label = "Apellido" placeholder="Ingrese su apellido" register={{...register("apellido", { required: true })}} name="apellido"  errors= {errors}/>
  

      <Input label = "Email" type = "email" placeholder="Ingrese su direccion de email" register={{...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            }),
      }} name="email"  errors= {errors} >
              {errors && errors?.email?.type === "pattern" && (
              <Form.Text className="text-danger">No es un email valido</Form.Text>
          )}
          </Input>
            



    <Input label = "Password" type = "password" placeholder="Ingrese su contraseña"  register={{...register("password", {
              required: true,
              minLength: 8,
              maxLength: 14,
            })}}
            name="password"  errors= {errors} >
          {errors && errors?.password?.type === "required" && (
            <Form.Text className="text-danger">Este campo es obligatorio</Form.Text>
          )}
          {errors && errors?.password?.type === "minLength" && (
            <Form.Text className="text-danger">Debe introducir al menos 8 caracteres</Form.Text>
          )}
          {errors && errors?.password?.type === "maxLength" && (
            <Form.Text className="text-danger">No debe superar los 14 caracteres</Form.Text>
          )}
          </Input>

    
      <ButtonLoading loading={loading}>Registrarse</ButtonLoading>
      <AlertMessage {...alert} />
    </Form>
     
    </div>
  );
}

export default Registro;
