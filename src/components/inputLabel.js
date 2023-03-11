import '../styles/components/form-components.scss';

export default function InputLabel ({htmlFor, label}) {
  return(
    <div>
      <label className='label-freelance' htmlFor={htmlFor}>{label}</label>
    </div>
  )
}