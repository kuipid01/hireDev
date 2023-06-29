import React from 'react'
import LandingPage from '../../components/landingPage/LandingPage'
import CustomSlider from '../../components/CustomSlider/CustomSlider'
import TopDev from '../../components/TopDevs/TopDev'
import Slider from '../../components/Slider/Slider'
const Home = () => {
  return (
    <>
<LandingPage/>
 <CustomSlider type='Trending'/> 
 <TopDev /> 
 <Slider /> 
    </>
  )
}

export default Home