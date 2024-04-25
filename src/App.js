import Header from './components/header/Header';
import Info from './components/seccion/Info';
import Processes from './components/seccion/processes/Processes';
import { LanguageProvider } from './language';


const App = () => {
  return (
    <LanguageProvider>
      <Processes/>  
    </LanguageProvider>
  );
};
export default App;
