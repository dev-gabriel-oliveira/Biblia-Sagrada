import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";

import './home.css';
import cross from './cross.png';

export default function Home() {
    const navigate = useNavigate();
    return(
        <div className="home">
            <Container className='title'>
                <img src={cross} alt='' width={'200px'} style={{margin:'40px'}}/>

                <h1>Bíblia Sagrada</h1>

                <br/>

                <p>
                    "Nem só de pão viverá o homem, mas de toda palavra que procede da boca de Deus"
                    <br/>
                    Mateus 4:4
                </p>

                <br/>

                <p>
                    Aqui você encontrará os livros referentes ao Novo e Velho Testamento.
                    A palavra de Deus conforta e ensina, ela nos guia nos momentos mais difíceis
                    e nos dá clareza quando estamos perdidos em meio a escuridão.
                    Nunca é tarde para buscarmos Sua Luz.
                </p>
            </Container>

            <hr/>

            <Container className='testaments'>
                <h5>Vamos começar?</h5>
                <Button color="warning" onClick={() => navigate('/livros')}>Ir para Livros</Button>
            </Container>
        </div>
    );
};