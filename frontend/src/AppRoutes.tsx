import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Lista from './pages/Lista';


function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
         <Route path='/lista' element={<Lista />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;