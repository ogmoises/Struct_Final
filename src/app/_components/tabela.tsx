import { db } from "~/server/db";
import RowTable from "./rowTable";

type Produto = {
  nome: string;
  Description: string;
  quantidade: number;
  Id: number;
  dia_do_cadastro: Date;
};

export async function Tabela() {
  const produtos = await db.produto.findMany();

  const handleClick = ({
    produto,
    action,
  }: {
    produto: Produto;
    action: string;
  }) => {};
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto, index) => {
          return <RowTable produto={produto} key={index}></RowTable>;
        })}
      </tbody>
    </table>
  );
}