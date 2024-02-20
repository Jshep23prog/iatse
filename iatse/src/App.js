import logo from './logo.svg';
import iatse from './iatse-logo.png'
import './App.css';
import React from 'react'
import ReactDOM from 'react';
import { SocialIcon } from 'react-social-icons'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="elementor-background-overlay" >
          <ul id="menu" class="elementor-nav-menu">
            <li class="menu-item">
              <a href="https://iatse.net/about" class="elementor-item">About Us </a>
            </li>
            <li class="menu-item">
              <a href="https://iatse.net/political-legislative/" class="elementor-item">Political / Legislative </a>
            </li>
            <li class="menu-item">
              <a href="https://iatse.net/local-union-directory/" class="elementor-item">Local Union Directory </a>
            </li>
            <li class="menu-item">
              <a href="https://iatse.net/yellow-cards/" class="elementor-item">Yellow Cards </a>
            </li>
            <li class="menu-item">
              <a href="http://canada.iatse.net/" class="elementor-item">Canada </a>
            </li>
          </ul>
        </div>
        <div class="elementor-column">
          <span class="elementor-grid-item">
            <SocialIcon url="https://www.facebook.com/IATSE" fgColor="white" bgColor="#1E1E1e" />
          </span>
          <span class="elementor-grid-item">
            <SocialIcon url="https://www.twitter.com/IATSE" fgColor="white" bgColor="#1E1E1e" />
          </span>
          <span class="elementor-grid-item">
            <SocialIcon url="https://www.instagram.com/IATSE" fgColor="white" bgColor="#1E1E1e" />
          </span>
          <span class="elementor-grid-item">
            <SocialIcon url="https://www.linkedin.com/company/20353269/" fgColor="white" bgColor="#1E1E1e" />
          </span>
          <span class="elementor-grid-item">
            <SocialIcon url="https://www.tiktok.com/@iatse" fgColor="white" bgColor="#1E1E1e" />
          </span>
          <span class="elementor-grid-item">
            <SocialIcon url="https://www.twitch.tv/IATSE" fgColor="white" bgColor="#1E1E1e" />
          </span>

          <span class="elementor-grid-item">
            <SocialIcon url="https://iatse.net/?s" fgColor="white" bgColor="#1E1E1e" />
          </span>
          <i class="fas fa-search"></i>
        </div>
        <img src={iatse} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
