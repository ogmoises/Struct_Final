import '~/styles/PagVizualizer.css';
import { Tabela } from '~/app/_components/tabela';

export default function PageComum() {

    return (
        <div>
            <header>
                <h1>Estoque de Produtos</h1>
            </header>

            <section className="inventory">
                <h2>Produtos Disponíveis</h2>
                <Tabela />
            </section>
        </div>
    );
};