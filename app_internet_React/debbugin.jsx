/*
DEBUGGING
    -> Depuração é o processo de encontrar e reduzir defeitos de um software

FERRAMENTAS
    -> Chrome Devtools 
    -> Redux Devtools: extensão que ajuda a monitorar a store
    -> React Devtools: Ajuda a inspencionar componentes de maneira mais amigável

    -> Abas que abrem no React DevtoolsApp
        Action
        State
        Diff
        Trace
        Test
AUDITS
    -> Testar a performance da aplicação
    -> Gera um relatório verificando os itens
            -> Performance
            -> Accessibility
            -> Best Practices
            -> SEO
            -> Progress Web App (PWA)
            
    
*/

import React from 'react';

const Item = (item, index) => {
    debugger
    return <li key={index}>{item}</li>

}

export const Topico2 = () => {
    const list = [1, 2, 3, 4, 5];
    return (
        <ul>

            {list.map((item, index) => Item(item, index))}
            </ul>
    )
}

