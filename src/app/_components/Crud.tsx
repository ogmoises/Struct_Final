export async function Produtos() {
    const response = await fetch("http://localhost:3000/api/crud")

    const data:{message: string ,produtos:{nome:string ,Description:string ,quantidade:number ,Id:number }[]} = await response.json() as {message: string ,produtos:{nome:string ,Description:string ,quantidade:number ,Id:number }[]}

    return (
        <ul>
            {data.produtos.map((item) => <li key= {item.Id}>{item.nome}</li>)}
        </ul>   
    )
}