import Header from './components/header/Header';
import Info from './components/info/Info';
import Services from './components/services-section/Services';
import Processes from './components/processes/Processes';
import { LanguageProvider } from './language';


const App = () => {
  return (
    <LanguageProvider>
      <Header/>
      <Info/>
      <Services/>
      <Processes/>  
    </LanguageProvider>
  );
};
export default App;
