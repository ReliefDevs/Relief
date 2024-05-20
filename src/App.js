import Header from './components/header/Header';
import Info from './components/seccion/Info';
import Processes from './components/seccion/processes/Processes';
import Services from './components/servicios/Services';
import { LanguageProvider } from './language';
import AboutUs from './components/aboutUs/AboutUs';

const App = () => {
  return (
    <LanguageProvider>
      <Header/>
      <Info/>
      <Services/>
      <Processes/>  
      <AboutUs/>
    </LanguageProvider>
  );
};
export default App;
