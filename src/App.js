import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import Login from './LoginPage/login';
import Student from './StudentPage/Student';
import './App.css';
import Teacher from './TeacherPage/Teacher';
import Marks from './pages/Marks/Marks';
import ClassNotice from './pages/ClassNotice/ClassNotice';
import ClassAssignment from './pages/ClassAssignment/ClassAssignment';
import TeacherList from './pages/TeacherList/TeacherList';
import Profile from './pages/Profile/Profile';
import ChangePassword from './pages/ChangePassword/ChangePassword';

function App() {
  return (
    
     <BrowserRouter>
       <Routes>
         <Route path = '/' element={<Home />} />  
         <Route path = '/login' element={<Login />} />  
          <Route path = '/student' element={<Student />} />
          <Route path = '/teacher' element={<Teacher />} />
          <Route path = '/marks' element={<Marks />} />
          <Route path = '/classNotice' element={<ClassNotice />} />
          <Route path = '/classAssignment' element={<ClassAssignment />} />
          <Route path = '/teacherList' element={<TeacherList />} />
          <Route path = '/profile' element={<Profile />} />
          <Route path = '/changePassword' element={<ChangePassword />} />
        
      </Routes>
     </BrowserRouter> 
  );
}

export default App;
