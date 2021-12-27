import React from 'react';
import { Header } from '../../components/Header';

import './styles.css'

export function Home() {
    return(
        <div className="container">
            <Header />
            <main className="main-content">
                <h1>Home</h1>
            </main>
        </div>
    );
}