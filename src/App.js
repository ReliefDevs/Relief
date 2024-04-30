import Header from './components/header/Header';
import Info from './components/seccion/Info';
import Services from './components/servicios/Services';
import { LanguageProvider } from './language';


const App = () => {
  return (
    <LanguageProvider>
      <Header/>
      <Info/>
      <Services/>
    </LanguageProvider>
  );
};
export default App;
