import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route element={<MainLayout />} path='/'>
            <Route element={<Home />} index />
            <Route element={<About />} path='about' />
            <Route element={<Contacts />} path='contacts' />
            <Route element={<Courses />} path='courses' />
            <Route element={<SingleCourse />} path='courses/:courseSlug' />
            <Route element={<NotFound />} path='*' />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
