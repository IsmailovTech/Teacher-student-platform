import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import Login from './LoginPage/login';
import Student from './StudentPage/Student';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home />} />  
        <Route path = '/login' element={<Login />} />  
        <Route path = '/student' element={<Student />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
