import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header'
import Project from './Components/Projects'
import Skills from './Components/Skills';
import { useRef } from 'react';
import ContactScreen from './Components/Footer';
import Experience from './Components/Experience';

const HomePage=()=> {

  const projectRef=useRef(null)
  const gotoProject=()=>{
    projectRef.current.scrollIntoView() 
  }

  const skillRef=useRef(null)
  const gotoSkill=()=>{
    skillRef.current.scrollIntoView() 
  }

  const aboutUsRef=useRef(null)
  const gotoAbout=()=>{
    aboutUsRef.current.scrollIntoView() 
  }

  const experienceRef=useRef(null)
  const gotoExperience=()=>{
    aboutUsRef.current.scrollIntoView() 
  }

  return (
    <>
    
    <NavBar
       Projecthandler={gotoProject}
       skillHandler={gotoSkill}
       aboutHandler={gotoAbout}
       experienceHandler={gotoExperience}
    />
    <Header/>
    <Skills
      refe={skillRef}
    />

    <Experience refe={experienceRef} />
    <Project
       refe={projectRef}
    />

    <ContactScreen  refe={aboutUsRef}/>

 
    
    </>
  );
}

export default HomePage;