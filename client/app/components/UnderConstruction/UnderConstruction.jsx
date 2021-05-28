import React from 'react';
import { Link } from 'react-router-dom';
import './UnderConstruction.css';

const UnderConstructions = () => {
  return (
    <div id='under-constructions' >
      <header>
        <div id='under-constructions-top-bar' >
          <h1 id='under-constructions-title' className='app-title-style' >
            <Link to='/' >
              Rotisserie MTG
            </Link>
          </h1>
        </div>
      </header>
      <i className="fas fa-hard-hat"></i>
      <h1>This Page Is Currently Under Constructions</h1>
      <p>
        I am a one-man team and so updates might take a little while to come out. I appreciate your understanding.
      </p>
      <p>
        Follow the project's <a href='https://github.com/tdagai/Rotisserie-MTG' className='link-style' >github</a> for updates on the current state of development!
      </p>
      <p><Link to='/' className='link-style'>Go to Home Page</Link></p>
    </div>
  );
};

export default UnderConstructions