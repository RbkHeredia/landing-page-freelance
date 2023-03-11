import '../../styles/landing-page.scss';
import logoIcons from '../../assets/medios-pago.png';
import CardPayment from "../../components/card-payment";
import imagenCentral from "../../assets/worker.jpg";
import CardIcons from '../../components/card-icons';

export default function Payment () {
  const PaymentTypes = [
    {id:1, title: 'Create your account', text:'In a few minutes you can create an account on our platform'},
    {id:2, title: 'Post a project', text: 'Create a custom project'},
    {id:3, title: 'Select your skills', text: 'You will receive many proposals'},
    {id:4, title: 'Finish your proyect', text: 'Once the complete work is obtained, do not forget to rate the proyect'}
  ]

  const PaymentTips = [
    {id:1, title: 'Control', text: 'Control all your payments in one simple app.'},
    {id:2, title: 'Methods', text: 'Pay with bank note, PIX or credit card.'},
    {id:3, title: 'Satisfaction', text: 'Be protected by digital contracts.'},
  ]

  const Icons = [
    {id: 1, route: "/icons/rayo.svg", alt: 'rayo-icon'},
    {id: 2, route: "/icons/plus.svg", alt: 'plus-icon'},
    {id: 3, route: "/icons/clip.svg", alt: 'clip-icon'},
    {id: 4, route: "/icons/star.svg", alt: 'star-icon'},
  ]
  return(
    <div className="container-payment">
      <div className="second-circle"></div>
      <div className="cont-img-central">
        <img className="img-central" src={imagenCentral} alt="imagen central"></img>
        
        <div className="text-column">
          <h2 className="register-title">How does it work?</h2>
        <div className='cont-icons-text'>
          <div className='cont-icons'>
            {Icons.map((icon)=>(
                <CardIcons
                  key={icon.id}
                  route={icon.route}
                  alt={icon.alt}/>
              ))}
          </div>
          
          <div className='cont-card-icons'>
            {PaymentTypes.map((payment)=>(
              <div key={payment.id}>
                <p className="payment-title" id={payment.id}>{payment.title}</p>
                <p className="payment-text" key={payment.id}>{payment.text}</p>
              </div>
          ))}
          </div>
        </div>
        </div>
      </div>
      <div className="container-icons">
        <div className="text-payment">
          <h2 className="register-title">Payment in dollars</h2>
          <p className="icon-text">Control your payments in one place.</p>
        </div>
        <div className="icons-section">
          <img src={logoIcons} alt='medios-pago'></img>
        </div>
      </div>
      <div className="container-cards-payment">
        {PaymentTips.map((tip)=>(
          <CardPayment
            key={tip.id}
            title={tip.title}
            text={tip.text}
          />
        ))}
      </div>
    </div>
  )
}