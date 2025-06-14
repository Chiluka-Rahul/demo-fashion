import './Contact.css';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';



const ListMenu = ({ children }) => {
  const DURATION = 0.2;
  const STRAGGER = 0.025;

  return (
    <motion.li
      initial="initial"
      whileHover="hovered"
      className="text-hover-connect-button"
    >
      <div className="text-get-touch">
        {children.split("").map((l, i) => (
          <motion.span
            key={`line1-${i}`}
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            transition={{
              ease: "easeInOut",
              duration: DURATION,
              delay: STRAGGER * i,
            }}
            className="inline-span"
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="another-text-get-touch">
        {children.split("").map((l, i) => (
          <motion.span
            key={`line2-${i}`}
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{
              ease: "easeInOut",
              duration: DURATION,
              delay: STRAGGER * i,
            }}
            className="inline-span"
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.li>
  );
};

export default function Contact() {

  
  return (
    <section className="contact-wrapper">
      <div className="contact-container">
  {/* LEFT SIDE */}
  <div className="contact-box">
    <img
      src="https://cdn.prod.website-files.com/6736298731cbe5c55f005f38/673eeac060545b4d84149055_Rectangle%20240650035.webp"
      alt="Leather Sample"
      className="contact-img"
    />
    <h3 className="contact-heading">Get Samples Today!</h3>
    <input className="contact-input" type="email" placeholder="Enter your email" />
    <button className="contact-btn">Contact us</button>
  </div>

  {/* RIGHT SIDE */}
  <div className="contact-info">
    <div className='div-division'>
        <ul className="contact-list">
          <ListMenu>Why choose us?</ListMenu>
          <ListMenu>Reviews</ListMenu>
          <ListMenu>About</ListMenu>
          <ListMenu>View portfolio</ListMenu>
          <ListMenu>Showroom</ListMenu>
          <ListMenu>FAQ</ListMenu>
        </ul>

        <div className="leather-info-box">
        <div className="leather-icon">🛡️</div>
        <div>
            <p className="leather-title">Don’t need upholstery leather?</p>
            <p className="leather-desc">
            Shop our extensive leather collections for the fashion and leathercraft industries!
            </p>
            <a href="#" className="shop-link">Shop now</a>
        </div>
        </div>

    </div>


    <address className="showroom-address">
      <strong>Creative Address</strong><br />
      Indian, Wealthy state<br />
      Chiluka's house, Rohith & Rahul
    </address>

    <div className="contact-icons">
      <div className="icon"><FiPhone /></div>
      <div className="icon"><FiMail /></div>
      <div className="icon"><FaChevronUp /></div>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="contact-footer">
        <div>© 2025 All rights reserved.</div>
        <div>Cookies</div>
        <div>Privacy Policy</div>
        <div><a href="#">Made by Chiluka's</a></div>
      </footer>

      <h1 className="contact-bg">Veloura Veloura</h1>
    </section>
  );
}
