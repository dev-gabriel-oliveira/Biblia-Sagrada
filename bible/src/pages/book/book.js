import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, InputGroup } from 'reactstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './book.css'

export default function Book() {
  const { index, id } = useParams();
  const navigate = useNavigate();
  const ver = null;

  // List of Books Array
  const [ bookData, setBookData ] = useState([]);
  const [ chapterData, setChapterData ] = useState([]);
  const [ chapterNum, setChapterNum ] = useState(1);

  // Get the Book
  useEffect(() => {
    axios.get('http://biblia.marciocosta.eti.br/v1/Resumo/versao/3')
    .then((res) => {
      // handle success
      setBookData(res.data[index]);
      console.log(res.data);
    })
    .catch((err) => {
      // handle error
      alert(err);
    });

    // Scroll to Top
    window.scrollTo(0, 0);
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

  const nextChapter = () => {
    setChapterNum(chapterNum + 1)
    // Scroll to Top
    window.scrollTo(0, 0);
  }

  const prevChapter = () => {
    setChapterNum(chapterNum - 1)
    // Scroll to Top
    window.scrollTo(0, 0);
  }

  return (
    <div className='book'>
      <Container>
        <Button onClick={() => navigate('/livros')}>Voltar</Button>

        <hr/>

        <h1>{bookData.livro}</h1>
        <h3>Capítulo {chapterNum}</h3>

        <hr/>
          {[...new Array(bookData.capitulos)].map((each, index) => {
            return(
              <>
              {(index + 1) === chapterNum ? (
                <Button
                  className='chapters'
                  key={index + 1}
                  disabled
                >
                  {index + 1}
                </Button>
              )
              :
              (
                <Button
                  className='chapters'
                  key={index + 1}
                  onClick={() => setChapterNum(index + 1)}
                >
                  {index + 1}
                </Button>
              )}
              </>
            )
          })}
        <hr/>

        <InputGroup>
          {chapterNum === 1 ? (
              <Button disabled><FaArrowLeft/></Button>
          ):(
              <Button onClick={prevChapter}><FaArrowLeft/></Button>
          )}
          
          {chapterNum === bookData.capitulos ? (
              <Button disabled><FaArrowRight/></Button>
          ):(
              <Button onClick={nextChapter}><FaArrowRight/></Button>
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
              <Button onClick={prevChapter}><FaArrowLeft/></Button>
          )}
          
          {chapterNum === bookData.capitulos ? (
              <Button disabled><FaArrowRight/></Button>
          ):(
              <Button onClick={nextChapter}><FaArrowRight/></Button>
          )}
        </InputGroup>

      </Container>
    </div>
  );
}