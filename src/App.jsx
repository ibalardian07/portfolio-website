import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/Style.css'
import './assets/css/Timeline.css'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Certificate from './Pages/Certificate'
import Achievement from './Pages/Achievement'
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<LayoutOne />}>
            <Route path='/' element={<Home />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/achievement' element={<Achievement />} />
            <Route path='/projects' element={<Projects />} />
          </Route>
          
          {/* NotFound */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
