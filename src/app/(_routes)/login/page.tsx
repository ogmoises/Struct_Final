"use client";

import React from 'react';
import useLoginForm from '../../hooks/useLoginForm';
import '~/styles/login.css';

export default function Login(){
    const { formData, errors, handleChange, handleSubmit } = useLoginForm();

    return (
        <div className="page-container">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit">Entrar</button>
                </form>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </div>
            </div>
            <div className="home-link">
                <a href="/">Voltar à página inicial</a>
            </div>
        </div>
    );
}