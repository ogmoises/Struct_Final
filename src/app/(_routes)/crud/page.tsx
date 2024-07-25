'use client'
import React, { useState, FormEvent } from 'react';
import '~/styles/crud.css';

const GerenciamentoEstoque: React.FC = () => {
  const [productId, setProductId] = useState<string | null>(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState<number>(0);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Logic to handle form submission, add or edit product
  };

  return (
    <div>
      <header>
        <h1>Gerenciamento de Estoque</h1>
      </header>

      <section className="product-form">
        <h2>Adicionar/Editar Produto</h2>
        <form id="product-form" onSubmit={handleFormSubmit}>
          <input type="hidden" id="product-id" value={productId ?? ''} />
          <label htmlFor="product-name">Nome do Produto:</label>
          <input
            type="text"
            id="product-name"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <label htmlFor="product-description">Descrição:</label>
          <input
            type="text"
            id="product-description"
            required
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <label htmlFor="product-quantity">Quantidade:</label>
          <input
            type="number"
            id="product-quantity"
            required
            min="0"
            value={productQuantity}
            onChange={(e) => setProductQuantity(parseInt(e.target.value, 10))}
          />
          <button type="submit">Salvar</button>
        </form>
      </section>

      <section className="product-list">
        <h2>Lista de Produtos</h2>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>
        </table>
      </section>
    </div>
  );
};

export default GerenciamentoEstoque;
