import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContext } from './AppContext';
import { useState } from "react";
import CommercePage from "./pages/CommercePage";
import HomePage from "./pages/HomePage";
import SciencePage from "./pages/SciencePage";
import LanguagePage from "./pages/LanguagePage";
import HumanitiesPage from "./pages/HumanitiesPage";
function App() {

  const [streamRoute , setStreamroute] = useState('');
  // const [subjectRoute , setSubjectroute] = useState('');

  return (
    <AppContext.Provider value={{streamRoute , setStreamroute }}>
    

  
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Science" element={<SciencePage />}/>
            <Route path="/Commerce" element={<CommercePage />}/>
            <Route path="/Language" element={<LanguagePage />}/>
            <Route path="/Humanities" element={<HumanitiesPage />}/>

          </Routes>
        </div>
      </Router>
   
    </AppContext.Provider>
  );
}

export default App;
