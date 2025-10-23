import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navbar from feature/navbar */}
        <nav style={{ backgroundColor: '#333', padding: '10px', color: 'white' }}>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}>Home</a>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}>About</a>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}>Contact</a>
        </nav>

        {/* Form from feature/form */}
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
          <h2>Simple Form</h2>
          <input type="text" placeholder="Enter your name" />
          <button>Submit</button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
