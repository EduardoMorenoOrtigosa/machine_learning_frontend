import bonum from './BONUM_logo.png';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bonum} className="App-logo" alt="logo" />

        <Form />
      </header>
    </div>
  );
}

export default App;
