import React from 'react'
import Hero from './components/Hero/Hero'
import Service from './components/services/Service'
import WhereToBuy from './components/whereToBuy/WhereToBuy'
import AppBanner from './components/AppBanner/AppBanner'
import Footer from './components/Footer/Footer'
// import Cards from './components/cards/Cards'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Service/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
      {/* <Cards/> */}
    </div>
  )
}

export default App