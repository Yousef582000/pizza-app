import React from 'react'
import "./contact.css"
import fourthSectionBG1 from "../../images/landing page images/fourth sectoin images/Capcicum 1.png"
import fourthSectionBG2 from "../../images/landing page images/fourth sectoin images/Clover 1.png"
import fourthSectionBG3 from "../../images/landing page images/fourth sectoin images/Gobi 1.png"
import fourthSectionBG4 from "../../images/landing page images/fourth sectoin images/Haldi 1.png"
import { useTheme } from '../../context'

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <div>
        
        <section className={darkMode?"main-section fourth-section dark-mode":"main-section fourth-section"}>
         
          <form>
            <h3>RESERVATION</h3>
            <p>
              Buchen Sie online oder rufen Sie uns unter +91 111 222 333 <br />
              Zwischen 9:30 AM - 10:00 PM
            </p>
            <div className="form-control">
              {/* <label htmlFor="name">Name</label> */}
              <input type="text" id="name" placeholder='Name' />
            </div>
            <div className="form-control">
              {/* <label htmlFor="email">E-Mail</label> */}
              <input type="email" id="email"  placeholder='Email'/>
            </div>
            <div className="form-control">
              {/* <label htmlFor="peopleNumbre">Personenzahl</label> */}
              <input type="text" id="peopleNumbre" placeholder='Personenzahl' />
            </div>
            <div className="form-control">
              {/* <label htmlFor="date&timer">Datum & Uhrzeit</label> */}
              <input type="text" id="date&timer" placeholder='Uhrzeit' />
            </div>
            <button className="btn">send Mail</button>
          </form>
            
          <img className="bg1" src={fourthSectionBG1} alt="Clover" />
          <img className="bg2" src={fourthSectionBG2} alt="Haldi" />
          <img className="bg3" src={fourthSectionBG3} alt="Capcicum" />
          <img className="bg4" src={fourthSectionBG4} alt="Gobi" />
        </section>
    </div>
  )
}

export default Contact