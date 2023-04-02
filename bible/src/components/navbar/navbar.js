import React from 'react';

import './navbar.css'

export default function NavBar() {
  return (
    <div className='nav-circle'>
      <div className="dropdown-center">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li><a className="dropdown-item" href="/">Início</a></li>
          <hr/>
          <li><a className="dropdown-item" href="/livros">Livros</a></li>
          <hr/>
          <li><a className="dropdown-item" href="">Sobre</a></li>
        </ul>
      </div>
    </div>
  );
}