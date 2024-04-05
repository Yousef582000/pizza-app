import React from 'react'
import { useTheme } from '../../context'
import "./about.css"
import About_image from "../../images/landing page images/second section images/aboutimage.png"
const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'about dark-mode' : ' about white-mode'}>
        <div className="image">
<img src={About_image} alt="" />
        </div>
        <div className="text">
   <h2>The best comfort food place</h2>
   <p>The best comfort food will always <br /> be greens, cornbread, and fried <br />
    chicken.</p>
    <button>Make Order</button>
        </div>

    </div>
  )
}

export default About