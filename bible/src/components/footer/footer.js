import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import './footer.css'

export default function Footer() {
  return (
    <footer>
        <hr/>
        <Container>
            <p>O presente site utiliza a <Link to={'https://bible-api.com/'}>Bible Api</Link>.</p>
            <br/>
            <p>Desenvolvido por <Link>@GabrielOliver</Link></p>
        </Container>
    </footer>
  );
}