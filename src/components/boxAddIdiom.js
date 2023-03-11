import { useState } from 'react';
import {
  TextField,
  Autocomplete,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio
} from '@mui/material';
import '../styles/register-freelancer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Ability = [
  {name:"Básico"},
  {name:"Conversacional"},
  {name:"Fluido"},
  {name:"Nativo"},
]

export default function BoxIdiom ({disabled, index, lengthIdiom, handleAdd, idiomsFetch, handleDelete }) {
  console.log(index+1, lengthIdiom)
  const [idioms, setIdioms] = useState({idiom:'Español', level:'Nativo'})

  const handleLevel = (event) =>{
    setIdioms({...idioms, level: event.target.value});
  }

  const handleIdiomInput = (event, newValue) => {
    setIdioms({...idioms, idiom: newValue})
  }

  const handleAddValue = () => {
    handleAdd(idioms)
  }

  const handleIdiom = (event) => {
    setIdioms({...idioms, idiom: event.target.value});
  }

  return(
    <div className='cont-idiom' disabled={disabled}>
    <div className='cont-first-idioms'>
      <div className='container-input-idioms'>
      
        <Autocomplete
          sx={{
            backgroundColor: '#F5F5F5',
            }}
          freeSolo
          defaultValue='Español'
          value={idioms.idiom}
          onChange={handleIdiomInput}
          className='autocomplete-idioms'
          id="free-solo-2-demo"
          disableClearable
          options={idiomsFetch.map((option) => option.idiom)}
          renderInput={(params) => (
            <TextField
              {...params}
              defaultValue='Español'
              focused={false}
              InputProps={{
                ...params.InputProps,
              }}
            />
          )}
        />
        <FormControl row fullWidth className='cont-form-group'>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Nativo"
            name="radio-buttons-group"
            onChange={handleLevel}
            value={idioms.level}
          >
            {Ability.map((option, index)=>(
          <FormControlLabel
            key={index}
            label={option.name}
            value={option.name}
            control={<Radio
              />}
              />
            ))}
          </RadioGroup>
        </FormControl>
        
    </div>
      {index+1 === lengthIdiom
      ? <div className='container-buttons-idioms'>
          <button className='cont-icon-idiom'
            onClick={handleDelete}>
            <FontAwesomeIcon className='icon-idioma' icon={faTrashCan}/>
          </button>
          <button className='cont-icon-idiom'
            onClick={handleAddValue}>
            <FontAwesomeIcon className='icon-idioma' icon={faPlus}/>
          </button>
        </div> 
      : null
      }
        

        
    </div>
    {index+1 === lengthIdiom
      ?<div className='cont-chips-idioms'>
        {idiomsFetch.map((idiomChip, index)=>(
          <button
            key={index}
            value={idiomChip.idiom}
            variant="outlined"
            className='pill-skills'
            onClick={handleIdiom}
            ><FontAwesomeIcon icon={faPlus}/>&nbsp;{idiomChip.idiom}</button>
          ))}
      </div>
      : null

    }
      
    </div>
  )
}