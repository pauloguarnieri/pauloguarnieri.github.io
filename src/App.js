import './App.css';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import { Reset } from './styles/global';

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
