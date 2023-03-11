import Footer from "../components/footer";
import Heather from '../page/landing-Components/heather.js';
import FreelanceRegister from "./landing-Components/freelance_register";
import Payment from "./landing-Components/payment";
import Profiles from "./landing-Components/profiles";

export default function LandingPage () {
  return(
    <div>
      <Heather/>
      <FreelanceRegister/>
      <Payment/>
      <Profiles/>
      <Footer/>
    </div>
  )
}