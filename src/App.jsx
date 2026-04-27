import data from './upcoming-events.json';
import GlobalStyle from "./components/GlobalStyle";
import { PageTitle } from './components/PageTitle/PageTitle';
import { PageBoard } from './components/PageBoard/PageBoard';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageTitle title="24thCore World Coalitions Conference" />
      <PageBoard events={data} />
    </>
  );
}

export default App;