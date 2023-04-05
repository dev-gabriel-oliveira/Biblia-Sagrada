import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

export default function NavBar() {
  return (
    <div className='nav-circle'>
      <div className="dropdown-center">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li><Link className="dropdown-item" to="/">Início</Link></li>
          <hr/>
          <li><Link className="dropdown-item" to="/livros">Livros</Link></li>
          <hr/>
          <li><Link className="dropdown-item" to="/sobre">Sobre</Link></li>
        </ul>
      </div>
    </div>
  );
}