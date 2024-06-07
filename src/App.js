import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import SubjectPage from "./pages/SubjectPage";
import { AppContext } from './AppContext';
import { useState } from "react";
function App() {

  const [streamRoute , setStreamroute] = useState('');
  const [subjectRoute , setSubjectroute] = useState('');

  return (
    <AppContext.Provider value={{streamRoute , setStreamroute , subjectRoute , setSubjectroute}}>

  
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/subject" element={<SubjectPage />}/> */}
          </Routes>
        </div>
      </Router>
   
    </AppContext.Provider>
  );
}

export default App;
