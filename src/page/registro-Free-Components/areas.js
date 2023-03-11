import { useState, useEffect } from 'react';
import '../../styles/register-freelancer.scss';
import Accordion from '@mui/material/Accordion';
import { 
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText ,
  Checkbox,
  Grid
  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';



export default function Areas ({ handleButton, handleActive, isLoading, budgets, handleDataAreas, areasSelected }) {
  
  const [checked, setChecked] = useState([]);
  const [alert, setAlert] = useState(false);
  const [valueAreas, setValue] = useState([])

  const handleValue = (item) => {
    setValue([...valueAreas, item.name])
  }

  const deleteValue = (currentIndex) =>{
    valueAreas.splice(currentIndex,1)
  }

const handleToggle = (value, item) => () => {
  const currentIndex = checked.indexOf(value);
  const newChecked = [...checked];
  if (currentIndex === -1) {
    handleValue(item)
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
    deleteValue(currentIndex)
  }
  setChecked(newChecked);
};
  useEffect(()=>{
    if (checked) {
      if (checked.length >5){
        handleActive()
        setAlert(true)
      }else {
        handleButton()
        handleDataAreas(valueAreas)
        setAlert(false)
      }
    } 
  },[checked])

  return(
    <div className='container-areas'>
      {isLoading
        ? <p>Cargando...</p>
        : <div>
        <h1 className='areas-title'>¡Bienvenido Agustin! ¿En qué áreas te especializas?</h1>
        <p>Selecciona hasta 5 opciones</p>
        {alert
        ? <div className='cont-error'>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <p className='error-areas'>Solo puedes elegir 5 áreas de interés</p>
        </div>
        : null
        }
        <div className='container-accordion'>
          {budgets && budgets.map((area, index)=>(
            
            <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              key={index}
            >
              <p >{area.title}</p>
            </AccordionSummary>
            <AccordionDetails>
            
            <List sx={{ 
              columns: 3,
              width: '100%', 
              maxWidth: '100%', 
              maxHeight: '100%',  
              bgcolor: 'background.paper', 
              }}>
              {area.subArea && area.subArea.map((item, value) => {
                
                const labelId = `checkbox-list-label-${value}`;
                
                return (
                  <ListItem
                    sx={{padding: '6px' }}
                    key={value}
                    disablePadding
                  >
                    <ListItemButton role={undefined} onClick={handleToggle(value, item)} dense>
                      <ListItemIcon>
                        <Checkbox
                          value={item}
                          key={value}
                          edge="start"
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText key={labelId} id={item.name} primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            </AccordionDetails>
          </Accordion>
          ))}
          
        </div>
        </div>
        }
    </div>
  )
}