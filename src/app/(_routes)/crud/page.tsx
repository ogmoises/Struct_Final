

import '~/styles/crud.css';
import { Produtos } from '~/app/_components/Crud';
import { FormProduto } from '~/app/_components/FormProduto';


export default function PageForm() {



  return (
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
  );
};


