import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class ="elementor-background-overlay" >
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
