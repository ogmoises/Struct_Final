import { prisma } from "prisma";
import {useState, type ChangeEvent, type FormEvent} from "react";

export function useForm(){
    const [formData, setFormData] = useState({
        email: "",
        password:"",
        confirmpassword: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [successMessage, setSuccessMessage] = useState<string>("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData ({...formData, [event.target.name]: event.target.value});
    }

    function validate() {
        let valid = true;
        let newErrors = { email: "", password: "", confirmpassword: "" };



        const parts = formData.email.split('@');
        if (parts.length !== 2) {
            newErrors.email = "O email deve conter UM @";
            valid = false;
        } else {
            const localPart = parts[0];
            const domainPart = parts[1];

            if (!domainPart) {
                newErrors.email = "O email deve conter um domínio";
                valid = false;
            } else {
                const domainParts = domainPart.split('.');

                if (!localPart || localPart.length === 0) {
                    newErrors.email = "O email deve ter caracteres antes do @";
                    valid = false;

                } else if (domainParts.length !== 2) {
                    newErrors.email = "O email deve conter UM '.' no domínio";
                    valid = false;
            } else {
                const domainName = domainParts[0];
                const topLevelDomain = domainParts[1];
                if (!domainName || domainName.length === 0) {
                    newErrors.email = "O email deve ter caracteres entre @ e '.'";
                    valid = false;
                } else if (!topLevelDomain || topLevelDomain.length === 0) {
                    newErrors.email = "O email deve ter caracteres após o '.'";
                    valid = false;
                }
                }
            }
        }


        if (formData.password.length < 3) {
            newErrors.password = "A senha deve ter pelo menos 3 caracteres";
            valid = false;
        }else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = "A senha deve conter pelo menos um caractere maiúsculo";
            valid = false;
        } else if (!/[a-z]/.test(formData.password)) {
            newErrors.password = "A senha deve conter pelo menos um caractere minúsculo";
            valid = false;
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = "A senha deve conter pelo menos um número";
            valid = false;
        }
        if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = "As senhas não coincidem";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrors({ email: "", password: "", confirmpassword:""});
        if (validate()) {
          try {
            const response = await fetch("/api/userCreation", {
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
                // Atualiza o estado de erros com a mensagem da API
                setErrors({
                  email: errorData.error || "",
                  password: "",
                  confirmpassword: "",
                });
                throw new Error(errorData.error || "Erro ao criar usuário");
              }
      
              const data = await response.json();
              console.log("Usuário criado:", data);
              setSuccessMessage("Cadastro realizado com sucesso!");
              // Limpa o formulário e os erros em caso de sucesso
              setFormData({
                email: "",
                password: "",
                confirmpassword: "",
              });
      
              // Limpa os erros
              setErrors({
                email: "",
                password: "",
                confirmpassword: "",
              });
              setTimeout(() => {
                setSuccessMessage("");
              }, 3000);

            } catch (error) {
              console.error("Erro ao criar usuário:", error);
            }
          }
        }
      
    return { formData, errors, successMessage, handleChange, handleSubmit };
}