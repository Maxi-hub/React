import './App.css';
import { Provider } from "react-redux";
import { store } from './store/store';
import { ToggleTheme } from './components/ToggleTheme';


function App() {
  return (
    <Provider store={store}>
      <ToggleTheme />
    </Provider>
  );
}

export default App;
