
import '../../styles/landing-page.scss';
import FormFreelance from "../../components/forms/form-Freelance";

export default function FreelanceRegister() {


  return(
    <div className="container-pageReg">
      <div className="container-register">
        <div className="container-text">
          <div className="circle"></div>
          <h1 className="qualified-title">
            Welcome to my landing page model
          </h1>
          <h4 className="qualified-text">
          This page contains a contact form, a step by step of the contact process, payment methods and some reviews.
          </h4>
        </div>
        <div className="container-form">
          <p className="register-text">
            Register on our platform
          </p>
          <FormFreelance/>
        </div>
      </div>
    </div>
  )
}