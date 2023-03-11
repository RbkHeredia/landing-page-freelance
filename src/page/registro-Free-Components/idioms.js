import { useState, useEffect } from 'react';
import '../../styles/register-freelancer.scss';
import BoxIdiom from '../../components/boxAddIdiom';



export default function Idioms ({ handleButton, handleIdioms }) {
  const [isLoading, setIsLoading] = useState(true);
  const [idiomsFetch, setIdiomsFetch] = useState([]);
  const [addIdiom, setAddIdiom] = useState([{idiom:'Español', level:'Nativo'},
  {idiom:'', level:''}])
  const [disabled, setDisabled] = useState(false)
  const [lengthIdiom, setLengthIdiom] = useState(0)

  
  useEffect(() =>{
    const fetchBudgets = async () => {
      const res = await fetch('http://localhost:5000/idioms')
      const data = await res.json()
      setIdiomsFetch(data);
      setIsLoading(false)
      handleButton()
    }
    fetchBudgets()
      .catch(console.error)
    ;
  },[])

  useEffect(()=>{
    if (addIdiom){
      setLengthIdiom(addIdiom.length)
    }
  },[addIdiom])

  const handleAdd = (idioms) => {
    setAddIdiom([...addIdiom, idioms])
    handleIdioms(addIdiom)
  }

  const handleDelete = () =>{
    addIdiom.splice(lengthIdiom-1,1)
    setDisabled(true)
    setLengthIdiom(addIdiom.length)
  }
  console.log(lengthIdiom)

  return(
    
    <div className='container-idioms'>
      {isLoading 
        ? <p> Cargando...</p>
        : <div>
            <h1 className='areas-title'>Último paso! ¿Qué idiomas hablas?</h1>
            <p>Esto te permitirá llegar a mayor cantidad de clientes!</p>
              {addIdiom && addIdiom.map((sector, index)=>(
                <BoxIdiom  
                handleDelete={handleDelete}
                key={index}
                idiomsFetch={idiomsFetch} 
                handleAdd={handleAdd}
                lengthIdiom={lengthIdiom}
                index={index}
                disabled={disabled}/>
              ))
              }
        </div>
      }
    </div>
  )
}