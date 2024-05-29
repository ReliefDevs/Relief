import Header from './components/header/Header';
import Info from './components/info/Info';
import Services from './components/services-section/Services';
import Processes from './components/processes/Processes';
import { LanguageProvider } from './language';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';

const App = () => {
  return (
    <LanguageProvider>
      <Header/>
      <Info/>
      <Services/>
      <Processes/>  
      <AboutUs/>
      <ContactUs/>
    </LanguageProvider>
  );
};
export default App;
