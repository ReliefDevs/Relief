import Header from './components/header/Header';
import Info from './components/seccion/Info';
import { LanguageProvider } from './language';


const App = () => {
  return (
    <LanguageProvider>
      <Header/>
      <Info/>
    </LanguageProvider>
  );
};
export default App;
