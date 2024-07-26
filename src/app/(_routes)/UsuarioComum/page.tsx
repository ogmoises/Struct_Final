import '~/styles/PagVizualizer.css';

export default function Dashboard() {
    return (
        <div>
            <header>
                <h1>Estoque de Produtos</h1>
            </header>

            <section className="inventory">
                <h2>Produtos Disponíveis</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="product-list">
                           {/* <!-- Exemplo de produtos --> */}
                        <tr>
                            <td>Produto 1</td>
                            <td>Descrição do Produto 1</td>
                            <td className="quantity">10</td>
                            <td>
                                <button className="decrease-btn">Diminuir</button>
                                <button className="increase-btn">Aumentar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Produto 2</td>
                            <td>Descrição do Produto 2</td>
                            <td className="quantity">5</td>
                            <td>
                                <button className="decrease-btn">Diminuir</button>
                                <button className="increase-btn">Aumentar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

    
    );


};