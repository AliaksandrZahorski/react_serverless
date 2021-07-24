import './App.css';
import data from './components/data/link'

function App() {
  return (
    <div className="App">
      {data.map(({ id, text, value }) => (
        <div className="List" key={id}>{text}</div>
      ))}
    </div>
  );
}

export default App;
