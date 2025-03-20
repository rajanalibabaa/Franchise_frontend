import React from 'react';
import {Route,Routes} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Dealerpage from './Pages/DealerPage';
import ChannelPartner from './Pages/ChannelPartner';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dealer' element={<Dealerpage/>}/>
        <Route path='/partner' element={<ChannelPartner/>}/>
      </Routes>
    </>

  )
}

export default App
