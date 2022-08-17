import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage/MainPage'
import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import CotalogWin from './components/header/CotalogWin';

function App(props) {
  return (
    <div>        
      <CotalogWin title="Cotalog Win"/>
      <MainPage/>

    </div>
  )}
  
export default App;
