import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EmployeeHome from './components/EmployeeHome';
import Footer from './components/Footer';
import Header from './components/Header';
import LeaveInfo from './components/LeaveInfo';

function App() {


  return (

    <Router>
    <Header />
    <Routes>
      <Route index path="/" element={<EmployeeHome />} />
      <Route path="/LeaveInfo" element={<LeaveInfo />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
