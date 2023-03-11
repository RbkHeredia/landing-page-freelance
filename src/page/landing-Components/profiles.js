import { useEffect, useState } from "react";
import '../../styles/landing-page.scss';
import ProfilesData from '../../data/profiles';
import imagenFinal from '../../assets/office.jpg'
import ButtonPrimary from "../../components/primary-button";

export default function Profiles() {
  const [selectedSlide, setSelectedSlide] = useState(1)
  const [profiles, setProfiles] = useState([])


  const currentSlide = (event) => {
    setSelectedSlide(Number.parseInt(event.target.value))
  }



  useEffect(() => {
    if (!!ProfilesData) {
      setProfiles(ProfilesData)
    }
  }, [ProfilesData])
  return (
    <div className="container-profiles ">
      <div className="container-final-landing">
        <div className="cont-final-text">
          <h1 className="qualified-title">
            Hire the best Developers
          </h1>
            <ButtonPrimary buttonText="I want to hire"
          />
          
        </div>
        <div className="cont-img">
          <img src={imagenFinal} alt="img-final" className="imagen-final"></img>
        </div>
      </div>
    </div>
  )
}