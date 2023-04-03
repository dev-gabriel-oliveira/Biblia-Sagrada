import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Input, InputGroup, Row } from 'reactstrap';

import './books.css'

export default function Books() {
  const navigate = useNavigate();
  const ver = null;

  // List of Books Array
  const [ booksData, setBooksData ] = useState([]);

  // Make a request for a user with a given ID
  useEffect(() => {
    axios.get('http://biblia.marciocosta.eti.br/v1/Resumo/versao/5')
    .then((res) => {
      // handle success
      setBooksData(res.data);
    })
    .catch((err) => {
      // handle error
      alert(err);
    });
  }, [ver]);

  return (
    <div className='books'>
      <Container>
        <h1>Livros</h1>

        <hr/>

        <InputGroup>
          <Input />
          <Button color='dark'>
            Buscar
          </Button>
        </InputGroup>

        <hr/>

        <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <Button className=''>
            Novo Testamento
          </Button>
          <Button>
            Evangelhos
          </Button>

          <Button>
            Antigo Testamento
          </Button>
          <Button>
            Pentateuco
          </Button>
        </div>

        <hr/>

        <Container fluid='xl' id='novo'>
          <h3>Novo Testamento</h3>
          <Row xl={4}>
            {booksData.filter((obj) => obj.testamentoId === 2).map((obj, key) => {
              return(
                <Col>
                  <Card
                    color='dark'
                    body
                    className="text-center"
                  >
                    <CardTitle tag="h5">{obj.livro}</CardTitle>
                    
                    <hr/>

                    <Button>
                      Ler
                    </Button>
                  </Card>
                </Col>
            )})}
          </Row>
        </Container>

        <hr/>
        
        <Container fluid='xl' id='antigo'>
          <h3>Antigo Testamento</h3>
          <Row xl={4}>
            {booksData.filter((obj) => obj.testamentoId === 1).map((obj, key) => {
              return(
                <Col>
                  <Card
                    color='dark'
                    body
                    className="text-center"
                  >
                    <CardTitle tag="h5">{obj.livro}</CardTitle>

                    <hr/>

                    <Button>
                      Ler
                    </Button>
                  </Card>
                </Col>
            )})}
          </Row>
        </Container>
      </Container>
    </div>
  );
}