import { Header } from './containers/Header';
import { Orders } from './containers/Orders';
import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
