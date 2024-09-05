import logo from './logo.svg';
import './App.css';

const userName = prompt('Введите ваше имя');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message userName={userName}/>
      </header>
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p className="message-text" style={{color: "#43f714", fontSize: 60}}>Welcome to my react, {props.userName} !</p>
    </div>
  );
}


export default App;
