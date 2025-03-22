import React from 'react';
import {Route,Routes} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Dealerpage from './Pages/DealerPage';
import ChannelPartner from './Pages/ChannelPartner';
import AllCategories from './Pages/AllCategories';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dealer' element={<Dealerpage/>}/>
        <Route path='/partner' element={<ChannelPartner/>}/>
        <Route path='/allcategories' element={<AllCategories/>}/>
      </Routes>
    </>

  )
}

export default App
