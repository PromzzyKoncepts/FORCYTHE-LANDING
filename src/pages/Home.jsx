import React from 'react'
import FirstSection from '../components/FirstSection'
import LastSection from '../components/LastSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import BestCallSection from '../components/BestCallSection'
import ArcSection from '../components/ArcSection'

const Home = () => {
  return (
    <div className='w-full pt-[6.3rem] md:pt-[6.8rem]'>
      <FirstSection />
      <SecondSection/>
      <ThirdSection/>
      <BestCallSection />
      <ArcSection />
      <LastSection />
    </div>
  )
}

export default Home
