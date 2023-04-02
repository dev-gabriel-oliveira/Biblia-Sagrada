import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { IoMdSad } from 'react-icons/io';

import './not_found.css'

export default function NotFound() {
  return (
    <Container className='not-found'>
        <IoMdSad/>
        <hr/>
        <h1>404</h1>
        <h3>Página não encontrada!</h3>
        <br/>
        <p>Volte para a <Link to={`/`}>Página Inicial</Link></p>
    </Container>
  );
}