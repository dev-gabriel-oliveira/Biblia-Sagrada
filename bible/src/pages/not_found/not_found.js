import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import './not_found.css'
import Christ from './Christ.png';

export default function NotFound() {
  return (
    <Container className='not-found'>
        <img id='Christ' src={Christ} width={'25%'} alt=''/>

        <hr/>

        <h5>"Porque o Filho do homem veio salvar o que se tinha perdido"</h5>
        <p>Mateus 18:11</p>

        <hr/>

        <h1>404</h1>
        <h3>Página não encontrada!</h3>
        <br/>
        <p>Volte para a <Link to={'/'}>Página Inicial</Link></p>
    </Container>
  );
}