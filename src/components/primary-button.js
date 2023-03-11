import '../styles/components/button.scss'

export default function ButtonPrimary ({ buttonText, onClick, disabled }) {
  return(
    <button  
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className="primary-button">
        {buttonText}
    </button>
  )
}