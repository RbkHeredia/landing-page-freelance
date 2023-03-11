
import '../styles/components/card-payment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function CardPayment({ title, text}){
  return(
    <div className="card-payment">
      <div className="card-title-payment">
        <p><FontAwesomeIcon icon={faCheck} className="check-icon"/>{title}</p>
      </div>
      <div className="card-text-payment">
        <p>{text}</p>
      </div>
    </div>
  )
}