import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './components/AddStudent';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<StudentsList/>} />
            <Route path="/add" element={<AddStudent/>} />
            <Route path="/students/edit/:id" element={<AddStudent/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;