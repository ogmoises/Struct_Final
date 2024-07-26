"use client";

import React from 'react';
import '~/styles/dashboard.css';

export default function PageDashboard () {
    return(
            <h1 class="historico">Histórico:</h1>
            <div class="scrollable-table">
                
                <table border="1" class="tabela-historico">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Código</th>
                            <th>Ação</th>
                            <th>Funcionário</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>  
                </table>
            </div>
            <div class="ranking">
                <div class="mais-vendidos">
                    <h1>Mais vendidos:</h1>
                    <div class="scrollable-table">
                        <table border="1" class="tabela-historico">
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
                
                <div class="menos-vendidos">
                    <h1>Menos vendidos:</h1>
                    <div class="scrollable-table">
                        <table border="1" class="tabela-historico">
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
            </div>
    )
}