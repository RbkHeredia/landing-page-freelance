import '../styles/components/form-components.scss';

export default function MenuItem ({value, key, option}) {
  return(
    <option
      value={value}
      key={key}
    >{option}</option>
  )
}