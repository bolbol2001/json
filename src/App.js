import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Scanner from './page/scanner';
import Generate from './page/Generate';
import Navbar from './components/Navbar'


function App() {






  return (




    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Generate />} />
        <Route path='/scanner' element={<Scanner />} />
        <Route path='/Generate' element={<Generate />} />


      </Routes>


    </Router>





  );
}


export default App;
