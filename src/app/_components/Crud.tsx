import { revalidatePath } from "next/cache"
import { db } from "~/server/db"

export async function Produtos() {
    const produtos = await db.produto.findMany()
    async function deleteProduto(form:FormData) {
      'use server'
      const Id = parseInt(form.get('id') as string)
      try{
        await db.produto.delete({
          where:{
            Id
          }
        })
        revalidatePath('/crud')
      }catch(e){
        console.log(e)
      }
    }
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
            <th><form action={deleteProduto}>
								<input
									hidden
									name="id"
									defaultValue={produto.Id}
								/>
								<button>
								Deletar
								</button>
							</form>
</th></tr>})}</tbody>
      </table>   
    )
}