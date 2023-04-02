import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, UncontrolledTooltip } from "reactstrap";

import './home.css';

export default function Home() {
    const navigate = useNavigate();
    return(
        <div className="home">
            <Container>
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

            <Container>
                <h5>Por onde quer começar?</h5>
                <br/>
                <Button color="warning" onClick={() => navigate('novo-testamento')}>Novo Testamento</Button>
                <br/><br/>
                <Button color="warning" onClick={() => navigate('velho-testamento')}>Velho Testamento</Button>
            </Container>
        </div>
    );
};