import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container ">

        <div className="footer-top">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h3>Download Vishal Plast Company Brochure</h3>
              </div>
            </div>


            <div className="col-md-6">
              <div className="row ">
                <div className="footer-sub-form">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter Email Address" />
                    <input type="submit" value="Submit Now" className="btn submit-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 text-center text-md-start mb-4">
            <img src="img/logo.png" alt="Logo" className="mb-3" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard.</p>
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


          <div className="col-lg-4 col-md-6 footer-right-form footer-details-title">
            <h5>Contact Us</h5>
            <form>
              <div className="form-field">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="form-field">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="form-field">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="form-field">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <input type="submit" value="Submit Now" className="btn submit-btn" />
            </form>
          </div>
        </div>

        <div className="footer-bt d-flex justify-content-between mt-5">
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
