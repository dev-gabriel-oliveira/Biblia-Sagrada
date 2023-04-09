import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { Button, Card, Col, Container, Input, InputGroup, Row, Spinner } from 'reactstrap';
import { IoMdRefresh } from 'react-icons/io';

import './books.css'

export default function Books() {
  const navigate = useNavigate();
  const ver = null;

  // Track the Loading Promise
  const { promiseInProgress } = usePromiseTracker();

  // Search
  const [ search, setSearch ] = useState('');

  // Filter
  const [ filter, setFilter ] = useState('');

  // List of Books Array
  const [ booksData, setBooksData ] = useState([]);

  // Get all Books
  useEffect(() => {
    trackPromise(
      axios.get('http://biblia.marciocosta.eti.br/v1/Resumo/versao/3')
      .then((res) => {
        // handle success
        setBooksData(res.data);
      })
      .catch((err) => {
        // handle error
        alert(err);
      })
    )

    // Scroll to Top
    window.scrollTo(0, 0);
  }, [ver]);

  return (
    <div className='books'>
      <Container>
        <h1>Livros</h1>

        <hr/>

        <InputGroup>
          <Input
            placeholder='Pesquise pelo nome do livro...'
            type="text"
            value={search}
            onChange={(event) => {
                setSearch(event.target.value);
            }}
          />
          <Button onClick={() => setSearch('')}>
            <IoMdRefresh/>
          </Button>
        </InputGroup>

        <div id='filters'>
          <Button
            className='filter'
            onClick={() => setFilter('gospels')}>
            Evangelhos
          </Button>
          <Button
            className='filter'
            onClick={() => setFilter('new')}>
            Novo Testamento
          </Button>
          
          .
          <Button
            className='filter'
            onClick={() => setFilter('')}>
            Todos
          </Button>
          .

          <Button
            className='filter'
            onClick={() => setFilter('old')}>
            Antigo Testamento
          </Button>
          <Button
            className='filter'
            onClick={() => setFilter('pentateuch')}>
            Pentateuco
          </Button>
        </div>

        <hr/>

        {promiseInProgress === true ? ( // Loading
          <Container>
            <Spinner type='grow'/>
            <Spinner type='grow'/>
            <Spinner type='grow'/>
          </Container>
        )
        :filter === '' ? ( // Get ALL Books
          <>
            <Container fluid='xl' id='new'>
              <h3>Novo Testamento</h3>
              <Row xl={4}>
                {booksData.filter((obj) =>
                  obj.testamentoId === 2 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).map((obj, key) => {
                  return(
                    <Col key={key}>
                      <Card
                        color='dark'
                        body
                        className="text-center"
                      >
                        <Button onClick={() => navigate(`${booksData.indexOf(obj)}/${obj.livroId}`)}>
                          {obj.livro}
                        </Button>                        
                      </Card>
                    </Col>
                )})}

                {booksData.filter((obj) =>
                  obj.testamentoId === 2 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                  <Col>
                    <Card
                      color='dark'
                      body
                      className="text-center"
                    >
                      <h5>Sem resultados!</h5>
                      <p>Tente outra busca</p>
                    </Card>
                  </Col>
                )}
              </Row>
            </Container>

            <hr/>
            
            <Container fluid='xl' id='old'>
              <h3>Antigo Testamento</h3>
              <Row xl={4}>
                {booksData.filter((obj) =>
                  obj.testamentoId === 1 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).map((obj, key) => {
                  return(
                    <Col key={key}>
                      <Card
                        color='dark'
                        body
                        className="text-center"
                      >
                        <Button onClick={() => navigate(`${booksData.indexOf(obj)}/${obj.livroId}`)}>
                          {obj.livro}
                        </Button>
                      </Card>
                    </Col>
                )})}

                {booksData.filter((obj) =>
                  obj.testamentoId === 1 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                  <Col>
                    <Card
                      color='dark'
                      body
                      className="text-center"
                    >
                      <h5>Sem resultados!</h5>
                      <p>Tente outra busca</p>
                    </Card>
                  </Col>
                )}
              </Row>
            </Container>
          </>
        ) 
        :filter === 'new' ? ( // Get the New Testament
          <>
            <Container fluid='xl' id='new'>
              <h3>Novo Testamento</h3>
              <Row xl={4}>
                {booksData.filter((obj) =>
                  obj.testamentoId === 2 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).map((obj, key) => {
                  return(
                    <Col key={key}>
                      <Card
                        color='dark'
                        body
                        className="text-center"
                      >
                        <Button onClick={() => navigate(`${booksData.indexOf(obj)}/${obj.livroId}`)}>
                          {obj.livro}
                        </Button>
                      </Card>
                    </Col>
                )})}

                {booksData.filter((obj) =>
                  obj.testamentoId === 2 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                  <Col>
                    <Card
                      color='dark'
                      body
                      className="text-center"
                    >
                      <h5>Sem resultados!</h5>
                      <p>Tente outra busca</p>
                    </Card>
                  </Col>
                )}
              </Row>
            </Container>
          </>
        )
        :filter === 'old' ? ( // Get the Old Testament
          <>
            <Container fluid='xl' id='old'>
              <h3>Antigo Testamento</h3>
              <Row xl={4}>
                {booksData.filter((obj) =>
                  obj.testamentoId === 1 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).map((obj, key) => {
                  return(
                    <Col key={key}>
                      <Card
                        color='dark'
                        body
                        className="text-center"
                      >
                        <Button onClick={() => navigate(`${booksData.indexOf(obj)}/${obj.livroId}`)}>
                          {obj.livro}
                        </Button>
                      </Card>
                    </Col>
                )})}

                {booksData.filter((obj) =>
                  obj.testamentoId === 1 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                  <Col>
                    <Card
                      color='dark'
                      body
                      className="text-center"
                    >
                      <h5>Sem resultados!</h5>
                      <p>Tente outra busca</p>
                    </Card>
                  </Col>
                )}
              </Row>
            </Container>
          </>
        )
        :filter === 'gospels' ? ( // Get the Gospels
          <>
            <Container fluid='xl' id='new'>
              <h3>Evangelhos</h3>
              <Row xl={4}>
                {booksData.filter((obj) =>
                  obj.livroId >= 40 && obj.livroId <= 43 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).map((obj, key) => {
                  return(
                    <Col key={key}>
                      <Card
                        color='dark'
                        body
                        className="text-center"
                      >
                        <Button onClick={() => navigate(`${booksData.indexOf(obj)}/${obj.livroId}`)}>
                          {obj.livro}
                        </Button>
                      </Card>
                    </Col>
                )})}

                {booksData.filter((obj) =>
                  obj.livroId >= 40 && obj.livroId <= 43 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                  <Col>
                    <Card
                      color='dark'
                      body
                      className="text-center"
                    >
                      <h5>Sem resultados!</h5>
                      <p>Tente outra busca</p>
                    </Card>
                  </Col>
                )}
              </Row>
            </Container>
          </>
        )
        :filter === 'pentateuch' ? ( // Get the Pentateuch
          <>
            <Container fluid='xl' id='old'>
              <h3>Pentateuco</h3>
              <Row xl={4}>
                {booksData.filter((obj) =>
                  obj.livroId >= 1 && obj.livroId <= 5 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).map((obj, key) => {
                  return(
                    <Col key={key}>
                      <Card
                        color='dark'
                        body
                        className="text-center"
                      >
                        <Button onClick={() => navigate(`${booksData.indexOf(obj)}/${obj.livroId}`)}>
                          {obj.livro}
                        </Button>
                      </Card>
                    </Col>
                )})}

                {booksData.filter((obj) =>
                  obj.livroId >= 1 && obj.livroId <= 5 && obj.livro.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                  <Col>
                    <Card
                      color='dark'
                      body
                      className="text-center"
                    >
                      <h5>Sem resultados!</h5>
                      <p>Tente outra busca</p>
                    </Card>
                  </Col>
                )}
              </Row>
            </Container>
          </>
        )
        :('')}
        
      </Container>
    </div>
  );
}