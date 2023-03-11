import '../styles/components/card-payment.scss';

export default function CardIcons ({ route, alt }) {

  const cargarImagen = require.context("../assets", true);
  return(
    <div className="cont-card-icon">
      <img src={cargarImagen(`.${route}`)} alt={alt} className="icon"></img>
    </div>
  )
}