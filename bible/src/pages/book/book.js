import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Col, Container, Input, InputGroup, Row } from 'reactstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './book.css'

export default function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ver = null;

  // Search
  const [ search, setSearch ] = useState('');

  // Filter
  const [ filter, setFilter ] = useState('');

  // List of Books Array
  const [ bookData, setBookData ] = useState([]);
  const [ chapterData, setChapterData ] = useState([]);
  const [ chapterNum, setChapterNum ] = useState(1);

  // Get the Book
  useEffect(() => {
    axios.get('http://biblia.marciocosta.eti.br/v1/Resumo/versao/3')
    .then((res) => {
      // handle success
      setBookData(res.data[id - 1]);
      console.log(res.data[id - 1]);
      console.log(chapterNum);
    })
    .catch((err) => {
      // handle error
      alert(err);
    });
  }, [ver]);

  // Get Chapter
  useEffect(() => {
    axios.get(`http://biblia.marciocosta.eti.br/v1/versao/3/livro/${id}/capitulo/${chapterNum}/versiculos`)
    .then((res) => {
      // handle success
      setChapterData(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      // handle error
      alert(err);
    });
  }, [chapterNum]);

  return (
    <div className='book'>
      <Container>
        <h1>{bookData.livro}</h1>
        <h3>Capítulo {chapterNum}</h3>

        <hr/>

        <InputGroup>
            {chapterNum === 1 ? (
                <Button disabled><FaArrowLeft/></Button>
            ):(
                <Button onClick={() => setChapterNum(chapterNum - 1)}><FaArrowLeft/></Button>
            )}
            
            {chapterNum === bookData.capitulos ? (
                <Button disabled><FaArrowRight/></Button>
            ):(
                <Button onClick={() => setChapterNum(chapterNum + 1)}><FaArrowRight/></Button>
            )}
        </InputGroup>

        <hr/>

        <Container id='pages'>
            {chapterData.map((obj, key) => {
                return(
                    <p key={key}>
                        <strong>{obj.numero}.</strong> {obj.texto}
                    </p>
                )
            })}
        </Container>
        
        <hr/>

        <InputGroup>
            {chapterNum === 1 ? (
                <Button disabled><FaArrowLeft/></Button>
            ):(
                <Button onClick={() => setChapterNum(chapterNum - 1)}><FaArrowLeft/></Button>
            )}
            
            {chapterNum === bookData.capitulos ? (
                <Button disabled><FaArrowRight/></Button>
            ):(
                <Button onClick={() => setChapterNum(chapterNum + 1)}><FaArrowRight/></Button>
            )}
        </InputGroup>

      </Container>
    </div>
  );
}