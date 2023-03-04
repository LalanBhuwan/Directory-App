import './index.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import AddPersonMain from './Components/AddPersonMain';
import RetrieveMain from './Components/RetrieveMain';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      
      <BrowserRouter>
      <Nav/>
      <Routes>
      
        <Route path = "/" element = {<AddPersonMain/>}/>
        <Route path="/retrieve" element = {<RetrieveMain/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
