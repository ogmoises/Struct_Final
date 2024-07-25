import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuth } from '../../server/authContext';


export default function useLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({ email: "", password: "" });
    try {
      const response = await fetch("/api/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(prevErrors => ({ ...prevErrors, [errorData.field]: errorData.error }));
        throw new Error(errorData.error || "Erro ao logar");
      }

      const data = await response.json();
      console.log("Usuário logado:", data);

      login(data.usuario);

    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  }

  return { formData, errors, handleChange, handleSubmit };
}
