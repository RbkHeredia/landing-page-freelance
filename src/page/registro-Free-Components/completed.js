import '../../styles/register-freelancer.scss';
import imgFinal from '../../assets/freelas_4.svg';

export default function Completed () {
  return(
    <div className='container-areas'>
      <h1 className='areas-title'>¡Perfecto Agustin! Completaste el registro!</h1>
      <p>Sal a buscar algunos proyectos!</p>
      <div className='cont-imagen-freelas'>
        <img src={imgFinal} alt="freelas"></img>
      </div>
    </div>
  )
}