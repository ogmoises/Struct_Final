import '~/styles/crud.css';
import { Produtos } from '~/app/_components/Crud';
import { FormProduto } from '~/app/_components/FormProduto';
import Protection from '~/server/protection';

export default function PageForm() {



  return (
    <Protection>
    <div>
      <header>
        <h1>Gerenciamento de Estoque</h1>
      </header>
      <FormProduto />
      <section className="product-list">
        <h2>Lista de Produtos</h2>
        <Produtos />
        
      </section>
    </div>
    </Protection>
  );
};