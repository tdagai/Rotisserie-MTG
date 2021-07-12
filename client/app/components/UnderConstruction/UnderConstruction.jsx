import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar.jsx';
import './UnderConstruction.css';

//

const UnderConstructions = ({ whereAmI }) => {
  return (
    <div id='under-constructions' >
      <NavBar whereAmI={whereAmI} />
      <section id='under-constructions-content' >
        <i className="fas fa-hard-hat"></i>
        <h1>This Page Is Currently Under Constructions</h1>
        <p>
          I am a one-man team and so updates might take a little while to come out. I appreciate your understanding.
      </p>
        <p>
          Follow the project's <a href='https://github.com/tdagai/Rotisserie-MTG' target='_blank' className='link-style' rel='noopener' aria-label='github project link' >github</a> for updates on the current state of development!
      </p>
        <p><Link to='/' className='link-style'>Go to Home Page</Link></p>
      </section>
    </div>
  );
};

export default UnderConstructions