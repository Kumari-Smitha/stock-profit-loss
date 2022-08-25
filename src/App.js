
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <>
    <div className="App">
      <h1>Stock Profile & Loss</h1>
      <Input  text="Initial Price" type="text"/>
      <Input  text="Quantity of Stock" type="text"/>
      <Input  text="Current Price" type="text"/>
      <button>Tell Me!</button>
    </div>
    <footer className='footer'>
      <p>© | 2022 | Kumari Smitha</p>
    </footer>
    </>
  );
}

export default App;
