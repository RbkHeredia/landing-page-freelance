import { useState } from "react";
import InputType from "../input";
import '../../styles/components/form-components.scss';
import '../../styles/components/button.scss'
import InputLabel from "../inputLabel";

const freelanceType = [
  {id:1, type: 'Technology and programming'},
  {id:2, type: 'Design and illustration'},
  {id:3, type: 'Content and translation'},
  {id:4, type: 'Marketing and performance'},
  {id:5, type: 'Other'}
]

export default function FormFreelance () {
  const [freelance, setFreelance] = useState('')
  const [disable, setDisable] = useState(false)
  const [inputValue, setInputValue] = useState({ name: "", email: "", phone: "" });
  const { name, email, phone } = inputValue;
  const [activeMessage, setActiveMessage] = useState(false);

  const handleValue = (event) =>{
    setFreelance(event.target.value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (name && email && phone !== "") {
      setDisable(true)
    }
  };

 

  const handleForm = () =>{
    setActiveMessage(true);
  }


  
  return(
    <form className="form-freelance"  onSubmit={handleForm}>
      
      <InputType
        minlength="5"
        required
         type="text"
         value={name}
         placeholder="Your name"
         label="Name"
         name="name"
         onChange={handleChange}
         span='min 5 characters'
       />
      
      
      <InputType
        minlength="5"
        required
         type="email"
         value={email}
         placeholder="yourmail@example.com"
         label="Email"
         name="email"
         onChange={handleChange}
         span='min 5 characters'
       />

      <InputLabel
        htmlFor="type"
        label='What is your interest?'/>
      <select
        className="input-freelance select-freelance"
        value={freelance}
        onChange={handleValue}>
        {freelanceType.map((type)=>(
          <option 
            value={type.type}
            key={type.id}>
              {type.type}
          </option>
        ))}
      </select>
      
      <InputType
        min="1111111111"
        required
        type="number"
        value={phone}
        placeholder="11 5555 5555"
        label="Phone"
        name="phone"
        onChange={handleChange}
        span='Invalid number'
       />
       <button 
        disabled={!disable}
          type="submit"
          className="primary-button">
          Register
        </button>
        {activeMessage && 
          <p>Data collection test Name:{inputValue.name}, Mail:{inputValue.email}, phone: {inputValue.phone}, interest:{freelance}</p>
        }
    </form>
  )
}