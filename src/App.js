import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
  <h2>Simple Form</h2>
  <input type="text" placeholder="Enter your name" />
  <button>Submit</button>
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
