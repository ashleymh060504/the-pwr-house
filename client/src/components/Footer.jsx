import React from "react";
import '../styles/index.css';
import githubLogo from '../assets/github-mark.jpeg';

function Footer() {
  return (
    <footer>
      <p>Questions? Email me at:<br></br> 
      <a style={{ color: '#edafb8'}} href="mailto:ashleymh060504@gmail.com">ashleymh060504@gmail.com</a>
      </p>
      <p>&copy; 2025 Ashley Hayes<span> </span>
      <a href="https://github.com/ashleymh060504" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Logo" style={{ width: '20px', marginLeft: '8px' }} />
      </a>
      </p>
      
    </footer>
  );
}

export default Footer;