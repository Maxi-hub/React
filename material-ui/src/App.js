import './App.css';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter';
import { TodoList } from './components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <hr style={{ width: "60%", border: `1px solid green`}} ></hr>
      <TodoList />
    </div >
  );
}

export default App;
