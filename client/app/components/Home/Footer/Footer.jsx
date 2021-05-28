import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='homepage-footer' >
      <p className='footer-copyright' >Wizards of the Coast, Magic: The Gathering, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. © 1993-2021 Wizards. All Rights Reserved.</p>
      <p className='footer-copyright' >Rotisserie MTG is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC. Rotisserie MTG may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy. MAGIC: THE GATHERING® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at https://company.wizards.com/en/legal/fancontentpolicy.</p>
      <div id='footer-icon-container' >
        <i className="fab fa-discord footer-icon"></i>
        <i className="fab fa-twitter footer-icon"></i>
        <i className="fab fa-instagram footer-icon"></i>
        <a href='https://github.com/tdagai/Rotisserie-MTG' ><i className="fab fa-github footer-icon"></i></a>
      </div>
    </footer>
  );
};

export default Footer;