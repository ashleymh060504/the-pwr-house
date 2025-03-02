import React from "react";
import '../styles/index.css';
import githubLogo from '../assets/github-mark-white.png';

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Ashley Hayes</p>
      <a href="https://github.com/ashleymh060504" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
      </a>
      <p>Questions? Email: ashleymh060504@gmail.com</p>
    </footer>
  );
}

export default Footer;