import '../styles/components/footer.scss'

export default function Footer (){
  return(
    <footer className="footer-cont">
      <section className="column-footer">
        <h4>Footer</h4>
        <ul className="list-style">
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </section>
      <section className="column-footer">
        <h4>Support</h4>
        <ul className="list-style">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </section>
      <section className="column-footer">
        <h4>Follow Us</h4>
        <ul className="list-style">
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Facebook</li>
        </ul>
      </section>
    </footer>
  )
}