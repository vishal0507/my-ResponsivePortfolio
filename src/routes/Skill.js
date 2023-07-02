import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/heroImg2'
import Footer from '../components/Footer'
import SkillsContent from '../components/SkillsContent'

const Skill = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="SKILLS." text="I Show Cased my skil below." />
        <SkillsContent/>
        <Footer/>

    </div>
  )
}

export default Skill