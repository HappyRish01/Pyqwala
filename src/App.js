import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContext } from './AppContext';
import { useEffect, useState } from "react";
import CommercePage from "./pages/CommercePage";
import HomePage from "./pages/HomePage";
import SciencePage from "./pages/SciencePage";
import LanguagePage from "./pages/LanguagePage";
import HumanitiesPage from "./pages/HumanitiesPage";
import TablePage from "./pages/TablePage";
function App() {

  const [streamRoute , setStreamroute] = useState("Physics");
  const [subjectRoute , setSubjectroute] = useState('');

  const [year , setYear ] = useState(2023);


  // useEffect(()=>{
  //   console.log(subjectRoute)
  // },[subjectRoute])

  return (
    <AppContext.Provider value={{streamRoute , setStreamroute , year , setYear , subjectRoute , setSubjectroute }}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Science" element={<SciencePage />}/>
            <Route path="/Science/Physics" element={<TablePage />}/>
            <Route path="/Science/Chemistry" element={<TablePage />}/>
            <Route path="/Science/Maths" element={<TablePage />}/>
            <Route path="/Science/Biology" element={<TablePage />}/>
            <Route path="/Science/Computer Science" element={<TablePage />}/>
            <Route path="/Commerce" element={<CommercePage/>}/>
            <Route path="/Commerce/Accounts" element={<TablePage />}/>
            <Route path="/Commerce/Business Studies" element={<TablePage />}/>
            <Route path="/Commerce/Economics" element={<TablePage />}/>
            <Route path="/Commerce/Maths" element={<TablePage />}/>
            
            <Route path="/Humanities" element={<HumanitiesPage />}/>
            <Route path="/Humanities/History" element={<TablePage />}/>
            <Route path="/Humanities/Political Science" element={<TablePage />}/>
            <Route path="/Humanities/Geography" element={<TablePage />}/>
            <Route path="/Humanities/Psychology" element={<TablePage />}/>
            <Route path="/Humanities/Sociology" element={<TablePage />}/>
            <Route path="/Humanities/Economics" element={<TablePage />}/>
            <Route path="/General Test" element={<TablePage />}/>
            <Route path="/Language" element={<LanguagePage />}/>
            <Route path="/Language/English" element={<TablePage />}/>
            <Route path="/Physical Education" element={<TablePage />}/>
          </Routes>
        </div>
      </Router>
   
    </AppContext.Provider>
  );
}

export default App;
