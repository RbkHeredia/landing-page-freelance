import "../styles/components/form-components.scss"

const InputType = ({ value, label, name, placeholder, type, onChange, required, minlength, span, min }) => (
  <div className="container-input">
    {label && <label className='label-freelance' htmlFor="input-field">{label}</label>}
    <input
      min={min}
      minlength={minlength}
      required={required}
      type={type}
      value={value}
      name={name}
      className="form-control input-freelance"
      placeholder={placeholder}
      onChange={onChange}
    />
    <span className="error-message">
      {span}
    </span>
  </div>
);

export default InputType;