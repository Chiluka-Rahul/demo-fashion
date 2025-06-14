import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './Navbar.css';
import { opacity } from './anim'
import Nav from './Nav/Nav';


export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header">
      <div className="bar">
        <Link to="/" className="logo">Veloura</Link>

        <div onClick={() => setIsActive(!isActive)} className="el">
          {/* <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div> */}
          <div className="label">
            <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>Menu</motion.p>
            <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>Close</motion.p>
          </div>
        </div>

        <motion.div variants={opacity} animate={!isActive ? 'open' : 'closed'} className="shopContainer">
          <svg className="icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10C12.3012 10 14.1667 8.13452 14.1667 5.83333C14.1667 3.53214 12.3012 1.66666 10 1.66666C7.69881 1.66666 5.83334 3.53214 5.83334 5.83333C5.83334 8.13452 7.69881 10 10 10Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 18.3333C17.5 15.5719 14.1667 13.3333 10 13.3333C5.83335 13.3333 2.5 15.5719 2.5 18.3333" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="ell">
            <svg className="icon-1" width="18" height="19" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66602 1.66667H2.75449C2.9595 1.66667 3.06201 1.66667 3.1445 1.70437C3.2172 1.73759 3.2788 1.79102 3.32197 1.85829C3.37096 1.93462 3.38546 2.0361 3.41445 2.23905L3.80887 5M3.80887 5L4.68545 11.4428C4.79669 12.2604 4.85231 12.6692 5.04777 12.977C5.22 13.2481 5.46692 13.4637 5.75881 13.5978C6.09007 13.75 6.50264 13.75 7.32777 13.75H14.4593C15.2448 13.75 15.6375 13.75 15.9585 13.6087C16.2415 13.4841 16.4842 13.2832 16.6596 13.0285C16.8585 12.7397 16.9319 12.3539 17.0789 11.5823L18.1819 5.79141C18.2337 5.51984 18.2595 5.38405 18.222 5.27792C18.1892 5.18481 18.1243 5.1064 18.039 5.05668C17.9417 5 17.8035 5 17.527 5H3.80887ZM8.33268 17.5C8.33268 17.9602 7.95959 18.3333 7.49935 18.3333C7.03911 18.3333 6.66602 17.9602 6.66602 17.5C6.66602 17.0398 7.03911 16.6667 7.49935 16.6667C7.95959 16.6667 8.33268 17.0398 8.33268 17.5ZM14.9993 17.5C14.9993 17.9602 14.6263 18.3333 14.166 18.3333C13.7058 18.3333 13.3327 17.9602 13.3327 17.5C13.3327 17.0398 13.7058 16.6667 14.166 16.6667C14.6263 16.6667 14.9993 17.0398 14.9993 17.5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20.25C12 20.25 4.5 14.667 4.5 9.75C4.5 7.26472 6.51472 5.25 9 5.25C10.3913 5.25 11.7107 5.9875 12.375 7.10375C13.0393 5.9875 14.3587 5.25 15.75 5.25C18.2353 5.25 20.25 7.26472 20.25 9.75C20.25 14.667 12.75 20.25 12.75 20.25H12Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </motion.div>
      </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav/>}
        </AnimatePresence>
    </div>
  );
}
