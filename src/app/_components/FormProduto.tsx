
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export function FormProduto(){
    async function AddProduto(form:FormData) {
        'use server'
        const nome = form.get('produto') as string
        const Description = form.get('descricao') as string
        const quantidade = parseInt(form.get('quantidade') as string) 
        try{
            await db.produto.upsert({
                where:{
                    nome
                },
                update:{
                    Description,
                    quantidade
                },
                create:{
                    nome,
                    Description,
                    quantidade
                }
            })
            revalidatePath('/crud')
        }catch(e){
            console.log(e)
        }
    }
    return(
        <section className="product-form">
        <h2>Adicionar/Editar Produto</h2>
        <form action={AddProduto} id="product-form" >
          <input type="hidden" id="product-id" />
          <label htmlFor="product-name">Nome do Produto:</label>
          <input
            type="text"
            id="product-name"
            required
            name='produto'

          />
          <label htmlFor="product-description">Descrição:</label>
          <input
            type="text"
            id="product-description"
            required
            name='descricao'

          />
          <label htmlFor="product-quantity">Quantidade:</label>
          <input
            type="number"
            id="product-quantity"
            required
            min="0"
            name='quantidade'
          />
          <button type="submit">Salvar</button>
        </form>
      </section>
    )

}