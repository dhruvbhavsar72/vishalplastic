import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ContactForm from './ContactForm'
import NewsLetter from './NewsLetter'

library.add(fas, far, fab)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container ">

        <NewsLetter />

        <div className="row">

          <div className="col-lg-3 col-md-6 text-center text-md-start mb-4">
            <img src="img/logo.png" alt="Logo" className="mb-3" />
            <div className="social-icons mt-3">
              <a href="#">
                <FontAwesomeIcon icon={['fas', 'dog']} size="xs" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="xs" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="xs" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'youtube']} size="xs" />
              </a>
            </div>
          </div>


          <div className="col-lg-5 col-md-6 mb-4 ">
            <div className="footer-details footer-details-title">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <span>
                    <FontAwesomeIcon icon={['fas', 'location-dot']} size='xs' />
                  </span>
                  38/9, Revabhai Estate Near Bhimnath
                  Hotel, CTM Amraiwadi, Ahmedabad - 380026, Gujarat India.
                </li>
                <li>
                  <span><FontAwesomeIcon icon={['fas', 'location-dot']} size='xs' /></span>
                  411, Sudarshan Complex Near Mithakhali
                  Underbridge Navrangpura Ahmedabad - 380009, Gujarat India.
                </li>
                <li>
                  <span><FontAwesomeIcon icon={['fas', 'phone']} size='xs' /></span>
                  Phone: 079-2585 0410 <br />Mobile: +91-98252 92344
                </li>
                <li>
                  <span> <FontAwesomeIcon icon={['fas', 'envelope']} size='xs' /> </span>
                  vishalplast@yahoo.com</li>
              </ul>
            </div>
          </div>


          <ContactForm />
        </div>

        <div className="footer-bt flex justify-between sm:flex-row flex-col gap-2">
          <p>Copyright © 2025 Evolvision</p>
          <div className='flex items-center gap-4'>
            <a href="#" className="text-white">Terms of Use</a>
            <a href="#" className="text-white">Cookie Policy</a>
            <a href="#" className="text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
