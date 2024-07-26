import { db } from "~/server/db"
import { revalidatePath } from "next/cache"

export async function Tabela() {
    const produtos = await db.produto.findMany()

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
        <tbody>{produtos.map((produto,index)=>{return<tr key={index}>
            <th>{produto.nome}</th>
            <th>{produto.Description}</th>
            <th>{produto.quantidade}</th>
</tr>})}</tbody>
      </table>   
    )


}