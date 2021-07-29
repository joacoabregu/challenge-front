import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  message: string;
};

interface FormProps {
  urlPOST: string;
}

export default function Form({urlPOST}: FormProps) {
  let url = urlPOST;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.post(url)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue="email"
        {...register("email", {
          required: true,
          pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        })}
      />
      {errors.email?.type === "required" && (
        <span>Se requiere ingresar un email</span>
      )}
      {errors.email?.type === "pattern" && (
        <span>Ingrese un email válido, por favor</span>
      )}

      <textarea
        {...register("message", {
          required: true,
          minLength: 10,
          maxLength: 500,
        })}
      />
      {errors.message?.type === "required" && (
        <span>Se requiere ingresar un comentario</span>
      )}
      {errors.message?.type === "minLength" && (
        <span>El comentario debe tener al menos 10 caracteres</span>
      )}
      {errors.message?.type === "maxLength" && (
        <span>El comentario debe tener 500 caracteres como máximo</span>
      )}

      <input type="submit" />
    </form>
  );
}
