"use client";

import React from 'react';
import '~/styles/dashboard.css';
import { db } from "~/server/db";
import RowTable from "./rowTable";

import { Produtos } from '~/app/_components/Crud';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  date: string;
}
/*
export default function PageDashboard() {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      };
  
      fetchProducts();
    }, []);
*/
    return(
           <><h1 className="historico">Histórico:</h1>
            <div className="scrollable-table">
                
                <table border={1} className="tabela-historico">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Código</th>
                            <th>Ação</th>
                            <th>Funcionário</th>
                        </tr>
                    </thead>
                    <tbody> <!--
                        {products.map((product) => (
                        <tr key={db.prduto.id}>
                            <td>{db.produto.nome}</td>
                            <td>{db.produto.Id}</td>
                            <td>{new Date(db.produto.date).toLocaleDateString()}</td>
                        </tr>
          ))}-->
                    </tbody>  
                </table>
            </div>
            <div className="ranking">
                <div className="mais-vendidos">
                    <h1>Mais vendidos:</h1>
                    <div className="scrollable-table">
                        <table border={1} className="tabela-historico">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Código</th>
                                    <th>Vendidos</th>
                                    <th>Em estoque</th>
                                </tr>
                            </thead>
                            <tbody>
                                {}
                            </tbody>  
                        </table>
                    </div>
                </div>
                
                <div className="menos-vendidos">
                    <h1>Menos vendidos:</h1>
                    <div className="scrollable-table">
                        <table border={1} className="tabela-historico">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Código</th>
                                    <th>Vendidos</th>
                                    <th>Em estoque</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>  
                        </table>
                    </div>

                </div>
            </div></>
    )
}