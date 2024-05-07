import React from 'react'

import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import EventCreations from './pages/EventCreations';
import Submit from './pages/Submit';
import EventDisplay from './pages/EventDisplayPage'
import Registeryou from './pages/registerYou'
import Webdev from './pages/Webdev';
import Mobiledev from './pages/Mobiledev';


const App = () => {

  const handleLoginClick = () => {
    // Navigate to the login page
    // You can use React Router's history API to programmatically navigate
    // For simplicity, you can use window.location.href
    window.location.href = '/login';
  };
  return (
    <>

    
    

    <Router>
      <div className='App'>
      
      <Navbar onLoginClick={handleLoginClick} />
        <Routes>
        
         <Route index element={<Home />} />
         <Route path='/login' element={<LoginPage/>} />
         <Route path='/newEvent' element={<EventCreations/>} />
         <Route path='/team' element={< Submit/>} />
         <Route path='/events/:eventId' element={< EventDisplay/>} />
         <Route path='/registerme' element={< Registeryou/>} />
         <Route path='/webdev' element={< Webdev/>} />
         <Route path='/mobiledev' element={< Mobiledev/>} />

          
          </Routes>
          </div>
    </Router>
    

    {/* <NewNav />
    <Display />
    <Overview />
    <Portfolio />
    <Education />
    <Contact /> */}
    

    </>
  )
}

export default App