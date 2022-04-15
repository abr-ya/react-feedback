import GlobalStyle from './components/styled/Common.styled';
import { Header } from './components';
import { Home } from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
