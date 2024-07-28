"use client";

import React from 'react';
import '~/styles/dashboard.css';
import { db } from "~/server/db"

import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  date: string;
}

export default function PageDashboard () {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        setProducts(data);
      };
  
      fetchProducts();
    }, []);

    return(
           <><h1 className="historico">Histórico:</h1>
            <div className="scrollable-table">
                
                <table border={1} className="tabela-historico">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Código</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr key={db.produto.Id}>
                                <td>{db.produto.Id}</td>
                                <td>{db.produto.nome}</td>
                                <td>{new Date(db.produto.dia_do_cadastro).toLocaleDateString()}</td>
                            </tr>
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