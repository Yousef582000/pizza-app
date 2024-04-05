import React from 'react'
import "./item.css"
import PizzaImage from "../../images/landing page images/second section images/Pepperoni-Pizza 1.png"
 import { useTheme } from '../../context'
import { SUB_CAT } from '../../utils/menuList'

const Item = () => {
  const { darkMode } = useTheme();

  return (
    
    <div className={darkMode?"contaner-hamed dark-mode":"contaner-hamed white-mode"}>
    <img src={PizzaImage} style={{width:"100px"}} alt=""/>
    <div>
    <p class="title">Pizza with Peproni </p>
    <p class="description">14-20 minutes</p>
    <p class="price">12.Chf</p>
    <i class="fa-solid fa-plus plus"></i>
    </div>
    
 </div>

  )
}

export default Item

