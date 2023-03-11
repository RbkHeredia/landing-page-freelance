import { useState, useEffect } from 'react';
import '../../styles/register-freelancer.scss';
import {
  TextField,
  Autocomplete,
  Chip,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// verde 66CC99
export default function Skills ({isLoading, budgets, handleChangeSelected, handleDisable }) {
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const [input, setInput] = useState('');
  const [tagsValue, setTags] = useState([]); 

  const theme = createTheme({
    components: {
      MuiChip: {
        variants: [
          {
            props: { color: 'success' },
            style: {
              textTransform: 'none',
              border: 'none',
              backgroundColor: '#66CC99',
              color: '#FFF'
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: '#3E3E3C'
            },
          },
        ]
      },
      MuiTextField: {
        variants: [
          {
            props: { variant: 'standard'},
            style: {
              border:'none',
              color:'#F5F5F5',
              minWidth: 25,
            }
          }
        ]
      }
    },
  });

  const handleChip = (event)=>{
    if(tagsValue.length>2){
      handleDisable()
    } 
    if (tagsValue.length < 15){
      setInput(event.target.value);
      setTags([...tagsValue, event.target.value])
    }
    
  }

  const onChange = (event, newInputValue) =>{
    if(newInputValue){
      setInput(newInputValue);
      setTags([...tagsValue, newInputValue])
      handleDisable()
    }
    
  }
  const limitTags = 15;
  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
      if (tagsValue.length <= limitTags ){

        if (key === ',' &&  trimmedInput.length && !tagsValue.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }

        if (key === "Backspace" && !input.length && tagsValue.length && isKeyReleased) {
          e.preventDefault();
          const tagsCopy = [...tagsValue];
          const poppedTag = tagsCopy.pop();
          setTags(tagsCopy);
          setInput(poppedTag);
        }
        setIsKeyReleased(false); 
      } else {
        document.getElementById('tags').disabled = true;
    }
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
    document.getElementById('tags').disabled = false;
  }
  
  useEffect(()=>{
    if(tagsValue){
      handleChangeSelected(tagsValue)
    }
    
  }, [tagsValue])

  return(
    
    <div className='container-areas'>
      {isLoading
        ? <p>Cargando...</p>
        : <div>
            <h1 className='areas-title'>¡Excelente! ¿Qué habilidades dominas?</h1>
            <p>Elige hasta 15 habilidades que domines</p>
            <div className='container-input-search'>
            <ThemeProvider theme={theme}>
            <div className='container-skills'>
              {tagsValue.map((tag, index)=>(
                <Chip 
                sx={{
                  padding: '2px',
                  margin: '3px',
                  marginBottom: '5px'
                }}
                id='tags'
                variant="filled" 
                label={tag} 
                onDelete={() => deleteTag(index)} 
                color="success"/>
              ))
              }
              <Autocomplete 
                sx={{
                  minWidth: '30%',
                  width: '40%',
                  borderColor: '#F5F5F5',
                  border: '0 solid white',
                  '&hover,&:focus': {
                    boxShadow: 'none',
                    border:'none',
                  }
                }}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onChange={onChange}
                id="free-solo-demo"
                
                options={budgets[0].subArea.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField theme={theme}
                  disabled={false}
                  autoFocus={false}
                  sx={{
                    border: 'hidden',
                  '&hover,&:focus': {
                    color: '#F5F5F5',                
                  }}}
                  placeholder="Buscar una habilidad"
                  id="tags"
                  name="tags"
                  variant="standard"  
                  focused={false}
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                    }}
                    
                  />
                )}
              />
            </div>
            </ThemeProvider>
            </div>
            <div className='container-pills-skills'>
              {budgets[0].subArea && budgets[0].subArea.map((option, index) => (
                  <button
                    className='pill-skills'
                    key={index}
                    value={option.name}
                    onClick={handleChip}
                    ><FontAwesomeIcon icon={faPlus}/>&nbsp;{option.name}</button>
              ))}
           
            </div>
        </div>
      }
    </div>
  )
}