
import './App.css';
import {  Route, Routes } from "react-router-dom";
import FeeRecipt from './components/Admin/FeeRecipt';
import FeeRecipt2 from './components/Admin/FeeRecipt2';
import StudentFee from './components/Student/StudentFee';

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<FeeRecipt />} />
        <Route path="/page2" element={<FeeRecipt2/>} />
        <Route path="/student" element={<StudentFee/>} />
      </Routes>
    </div>
  );
}

export default App;
