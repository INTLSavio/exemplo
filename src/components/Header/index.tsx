import React, { useEffect, useState } from 'react';

import './styles.css';

import logo from '../../assets/logo.png';

export function Header() {

    const [teste, setTeste] = useState(false);

    useEffect(() => {
        console.log('Teste mudou')
    }, [teste])

    return(
        <header>
            <img src={logo} alt="Logo" />
            <div className="links">
                <a href="/">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Planos</a>
                <a href="/contato">Contato</a>
                <a href="#">Baixar</a>
                <a href="#" className='link-button' onClick={() => setTeste(!teste)}>Abrir Genus</a>
            </div>
            {teste ? <h1>Teste = true</h1> : <h1>Teste = false</h1>}
            
        </header>
    );
}