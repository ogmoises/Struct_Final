"use client";

import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Produto = {
  nome: string;
  Description: string;
  quantidade: number;
  Id: number;
  dia_do_cadastro: Date;
};

export default function RowTable({ produto }: { produto: Produto }) {
  const [quantidade, setQuantidade] = useState(produto.quantidade);
  const handleClick = ({
    produto,
    quantidadeNova,
  }: {
    produto: Produto;
    quantidadeNova: number;
  }) => {
    const novoProduto = {
      ...produto,
      quantidade: quantidadeNova,
    };
    fetch("http://localhost:3000/api/crud", {
      method: "PATCH",
      body: JSON.stringify(novoProduto),
    });
  };
  return (
    <tr>
      <th>{produto.nome}</th>
      <th>{produto.Description}</th>
      <th>{quantidade}</th>
      <th>
        <button
          className="decrease-btn"
          onClick={() => setQuantidade(quantidade - 1)}
        >
          Diminuir
        </button>
        <button
          className="increase-btn"
          onClick={() => setQuantidade(quantidade + 1)}
        >
          Aumentar
        </button>
        <button
          onClick={() => handleClick({ produto, quantidadeNova: quantidade })}
        >
          Salvar
        </button>
      </th>
    </tr>
  );
} 