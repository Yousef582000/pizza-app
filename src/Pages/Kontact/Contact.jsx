import React  from 'react'
import "./contact.css"
import Navbar from "../../components/Navbar/Navbar"
import logo from "../../images/footer/logo.png"
import watsapp from "../../images/footer/whatsapp-logo 1.png"
import faceIcon from "../../images/footer/facebook.png"
import XIcon from "../../images/footer/twitter 1.png"
import instagramIcon from "../../images/footer/instagram.png"
import Footer from '../../components/Footer/Footer'
import locationIcon from "../../images/footer/location.png"
import axios from "axios"
import WhatsappIcon from "../../images/WhatsApp_icon.png"
import { useState } from "react"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    if(e){
      e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
    };
    axios
     .post("https://lightsoft-001-site2.ltempurl.com/api/ContactUsApi/PizzaContactUs", data)
     .then((res) => {
        console.log("send");
      })
     .catch(
      (err) => {
        console.log(err);
      }
     )
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    }
  }
  return (
    <div className="contact">
        <Navbar/>
        <img src={WhatsappIcon} className="WhatsappIcon" alt="" />
        <section className="contact-section">
            <h2 className="contact-title">Kontact</h2>
              <div className="content">
                <div className="text">
                  <img src={logo} alt="" />
                  <p style={{marginRight:"30px"}}><i class="fa-solid fa-location-dot"></i>Zürcherstrasse 3, <br /> 8855 Wangen</p>
                  <p style={{marginRight:"30px"}}><i className="fas fa-phone"></i>tel: 41 55 463 366</p>
                  <p><i className="fas fa-envelope"></i><span>E-mail:info@pizzawangen.ch</span></p>
                    <p><i className="fa-brands fa-whatsapp icon"></i> Whats app : 41 55 463 366</p>
                    <div className="social">
         <div className='social-media-icon'>
              <img src={faceIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={XIcon} alt="" />
          </div>
        </div>
                </div>
                <div className="form">
               
                     <form action="" onSubmit={handleSubmit()}>
                        <h3>Kontact</h3>
                        <div className="box">
                            <input type="text" name="" id="name" onChange={(e)=>setName(e.target.value)} required placeholder='Name' />
                        </div>
                        <div className="box">
                            <input type="tel" name="" id="phone" onChange={(e)=>setPhone(e.target.value)}  required  placeholder='Phone'/>
                        </div>
                        <div className="box">
                            <input type="email" name="" id="email" onChange={(e)=>setEmail(e.target.value)} required placeholder='E-mail' />
                        </div>
                        <textarea name=""  placeholder="Message" onChange={(e)=>setMessage(e.target.value)}  id="" cols="30" rows="10"></textarea>
                  <button>Senden</button>
                     </form>
                </div>
              </div>
              <div className="location">
              <img src={locationIcon} alt="" />
             <p>Zürcherstrasse 3, 8855 Wangen</p>
              </div>
        </section>
        <Footer/>

    </div>
  )
}

export default Contact