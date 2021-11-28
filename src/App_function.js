import logo from './logo.svg';
import './App.css';

function App_function(props) {
  return (
    <div className="Red" style={{ "color" : "white"}}>
        <p>Hello World!</p>
        <p>{props.name}</p>
        <button 
        onClick={() => alert('hello')}>
          Click!
        </button>
    </div>
  );
}

export default App_function;
