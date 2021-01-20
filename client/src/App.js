import './App.css';
import { GlobalProvider } from './context/GlobalState';
import {BrowserRouter, Route} from 'react-router-dom';
import { RegistrationForm } from './components/RegistrationForm';
import {FoodMenu} from './components/FoodMenu'
function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
    <Route path = '/' exact component = {RegistrationForm} />
    <Route path = "/food" excat component = {FoodMenu}/>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
