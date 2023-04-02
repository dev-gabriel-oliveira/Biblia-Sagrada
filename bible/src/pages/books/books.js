import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import './books.css'

export default function Books() {
  const navigate = useNavigate();

  // List of Books Array
  const [ booksData, setBooksData ] = useState([]);

  return (
    <div className='books'>
      <Container>
        <h1>Livros</h1>
      </Container>
    </div>
  );
}