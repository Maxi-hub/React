import './App.css';
import { Provider, useSelector } from "react-redux";
import { store } from './store/store';
import { ToggleTheme } from './components/ToggleTheme';


function App() {
  const theme = useSelector(state => state.theme);
  
  return (
    // применяется сразу два класса
    <div className={`App-header ${theme}`}>
      {/* <Provider store={store}> */}
        <ToggleTheme />
      {/* </Provider> */}
    </div>
  );
}

export default App;