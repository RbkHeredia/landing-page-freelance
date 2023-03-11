import '../../styles/components/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';

export default function Heather () {
  return(
    <header className="slds-global-header">
      <div className="slds-global-header_container">
        <FontAwesomeIcon className='fa-brush' icon={faPaintBrush}/>
        <button>Check-in</button>
      </div>
    </header>
  )
}