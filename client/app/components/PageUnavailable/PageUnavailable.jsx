import React from 'react';
import { Link } from 'react-router-dom';
import './PageUnavailable.css';

const PageUnavailable = () => {
  return (
    <div id='page-unavailable' >
      <header><div id='page-unavailable-top-bar' ></div></header>
      <h1>The Page You Were Looking For Is Unavailable</h1>
      <p>
        The link you followed may be broken or the page may have been removed. <Link to='/' className='link-style'>Go to Home Page</Link>
        </p>
    </div>
  );
};

export default PageUnavailable;