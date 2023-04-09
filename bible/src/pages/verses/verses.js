import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { Button, Card, Col, Container, Input, InputGroup, Spinner } from 'reactstrap';
import { IoMdSearch, IoMdRefresh } from 'react-icons/io';

import './verses.css'

export default function Verses() {
  const ver = null;

  // Track the Loading Promise
  const { promiseInProgress } = usePromiseTracker();

  // Search Value
  const [ search, setSearch ] = useState('');

  // Do Search
  const [ doSearch, setDoSearch ] = useState('');

  // List of Verses Array
  const [ versesData, setVersesData ] = useState(null);

  // Scroll Up
  useEffect(() => {
    // Scroll to Top
    window.scrollTo(0, 0);
  }, [ver]);

  // On Enter Pressed
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      setDoSearch(!doSearch);
    }
  }

  // Search Verses
  useEffect(() => {
    if (search !== '') {
      trackPromise(
        axios.get(`http://biblia.marciocosta.eti.br/v1/buscar/${search}`)
        .then((res) => {
          // handle success
          setVersesData(res.data.filter((obj) =>
            obj.versaoId === 3
          ));
        })
        .catch((err) => {
          // handle error
          alert(err);
        })
      )
    }
  }, [doSearch]);

  return (
    <div className='verses'>
      <Container>
        <h1>Passagens</h1>
        
        <hr/>

        <InputGroup>
          <Input
            placeholder='Pesquise por uma passagem...'
            type="text"
            value={search}
            onKeyPress={handleKeyPress}
            onChange={(event) => {
                setSearch(event.target.value);
            }}
          />
          <Button onClick={() => setDoSearch(!doSearch)}>
            <IoMdSearch/>
          </Button>
          <Button onClick={() => {
            setSearch('');
            setVersesData(null);
          }}>
            <IoMdRefresh/>
          </Button>
        </InputGroup>

        <hr/>

        {promiseInProgress === true ? (
          <Container>
            <Spinner type='grow'/>
            <Spinner type='grow'/>
            <Spinner type='grow'/>
          </Container>
        )
        : versesData === null ? (
          <Container fluid='xl'>
            <Col>
              <Card
                color='dark'
                body
                className="text-center"
              >
                <p>"A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho"</p>
                <p>Salmos 119:105</p>
              </Card>
            </Col>
          </Container>
        )
        :
        (
          <Container fluid='xl'>
            {versesData.length !== 0 ? (
              <>
              {versesData.filter((obj, id) =>
                id > ((versesData.length / 2) - 10) &&
                id < ((versesData.length / 2) + 10)
              ).map((obj, key) => {
                return(
                  <Col key={key}>
                    <Card
                      color='dark'
                      body
                      className="text-center"
                    >
                      <p>"{obj.texto}"</p>
                      <p>{obj.livro.nome} {obj.capitulo}:{obj.numero}</p>
                    </Card>
                  </Col>
              )})}
              </>
            )
            :
            (
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
          </Container>
        )}
      </Container>
    </div>
  );
}