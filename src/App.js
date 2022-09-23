import './App.css';
import Header from './components/Header';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import { Reset } from './styles/global';

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
