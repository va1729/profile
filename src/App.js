import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <div id="profile">
          <img src="/profile-2.jpg" alt="profile" />
        </div>
        <div className="name">
          <div id="firstname">Vivekananda</div>
          <div id="lastname">Athukuri</div>
        </div>
        <div className="links">
          <a className="App-link" id="github" href="https://github.com/Vivekananda-Athukuri" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="App-link" id="linkedin" href="https://www.linkedin.com/in/vivekananda-athukuri/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="App-link" id="email" href="mailto:vivekananda.tagore@protonmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a className="App-link" id="skype" href="https://skype.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSkype} />
          </a>
          <a className="App-link" id="resume" href="https://www.visualcv.com/pdfs/5224336/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
