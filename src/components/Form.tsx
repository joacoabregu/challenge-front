import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProps } from "../types/interfaces";
import type { Inputs } from "../types/types";
import "../styles/Form.css";

export default function Form({ urlPOST }: FormProps) {
  let url = urlPOST;
  // State for form success or error submission
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const [errorSubmitted, setErrorSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post(url, data)
      .then((response) => {
        if (response.status === 201) {
          setIsSuccessfullySubmitted(true);
          setErrorSubmitted(false);
          reset();
        } else {
          setIsSuccessfullySubmitted(false);
          setErrorSubmitted(true);
        }
      })
      .catch((err) => {
        setIsSuccessfullySubmitted(false);
        setErrorSubmitted(true);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        })}
        disabled={isSubmitting}
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
        disabled={isSubmitting}
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

      <input type="submit" className="form-submit" />
      {isSuccessfullySubmitted && <div>Enviado correctamente</div>}
      {errorSubmitted && (
        <div>Se ha producido un error al enviar su formulario</div>
      )}
    </form>
  );
}
