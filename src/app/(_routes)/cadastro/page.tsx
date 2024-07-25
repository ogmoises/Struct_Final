"use client";
import { useForm } from "../../hooks/useForm";
import '~/styles/cadastro.css';
import Link from "next/link";

export default function Cadastro() {
    const { formData, errors, successMessage, handleChange, handleSubmit } = useForm();

    return (
        <div>
            {successMessage && <p className="success">{successMessage}</p>}
            <div className="page-container">
                <div className="signup-container">
                    <h2>Cadastro</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                onChange={handleChange}
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                required
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmpassword">Confirmar Senha</label>
                            <input
                                onChange={handleChange}
                                type="password"
                                id="confirmpassword"
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                required
                            />
                            {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                    <div className="login-link">
                        <p>Já tem uma conta? <Link href="/login">Faça login</Link></p>
                    </div>
                </div>
                <div className="home-link">
                    <Link href="/">Voltar à página inicial</Link>
                </div>
            </div>
        </div>
    );
}