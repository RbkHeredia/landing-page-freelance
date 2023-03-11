import { useState, useEffect } from 'react'
import ButtonPrimary from "../components/primary-button";
import ButtonSecondary from '../components/secondary-button';
import Areas from "./registro-Free-Components/areas";
import Completed from "./registro-Free-Components/completed";
import Heather from "./registro-Free-Components/heather";
import Idioms from "./registro-Free-Components/idioms";
import Skills from "./registro-Free-Components/skills";

export default function RegistroFreelancers () {

  const [section, setSection] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true)
  const [isLoading, setIsLoading] = useState(true);
  const [budgets, setBudgets] = useState([]);
  const [data, setData] = useState({
    areas: [],
    skills: [''],
    idioms: []
  })

  useEffect(() =>{
    const fetchBudgets = async () => {
      const res = await fetch('http://localhost:5000/budgets')
      const data = await res.json()
      setBudgets(data);
      setIsLoading(false)
    }
    fetchBudgets()
      .catch(console.error);
  },[])

  const handleSection = () => {
    if (section<3) {
      setSection(section+1)
      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }
  
  const handleBefore = () => {
    setSection(section-1)
  }

  const handleDisable = () => {
    setDisabledButton(true)
  }

  const handleActive = () => {
    setDisabledButton(false)
  }

  const handleDataAreas = (valueAreas) => {
    console.log(valueAreas)
    setData({...data, areas:valueAreas})
  }

  const handleChangeSelected = (tagsValue) =>{
    setData({...data, skills: tagsValue})
  }

  const handleIdioms = (addIdiom) => {
    setData({...data, idioms: addIdiom})
  }
  console.log(data)
  return(
    <>
      <Heather/>
      {section === 0
      ? <Areas 
        areasSelected={data.areas}
        isLoading={isLoading}
        budgets={budgets}
        handleButton={handleDisable} 
        handleActive={handleActive}
        handleDataAreas={handleDataAreas}/>
      : section === 1
      ? <Skills 
        handleDisable={handleDisable}
        isLoading={isLoading}
        budgets={budgets}
        handleChangeSelected={handleChangeSelected}/> 
      : section === 2 
      ? <Idioms
        isLoading={isLoading}
        budgets={budgets}
        handleButton={handleDisable}
        handleIdioms={handleIdioms}/>
      : <Completed/>
      }
      <div className="container-button-sticky">
        {section === 0 
        ?  null
        : <div className='container-before-button'>
          <ButtonSecondary
            buttonText="Anterior"
            onClick={handleBefore}/>
        </div>
        }
        {section<3
        ?<div className='container-button-after'>
          <ButtonPrimary 
            disabled={!disabledButton}
            buttonText="Siguiente"
            onClick={handleSection}
          />
        </div>
        : <div className='container-button-after'>
          <ButtonPrimary 
            buttonText="Ir al dashboard"
          />
        </div>
        }
        
      </div>
    </>
  )
}