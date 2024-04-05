import React, { useEffect, useState } from 'react'
import "./product.css"
import Item from './Item'
import OwlCarousel  from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.min.css"
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Card from '../show/Card'
import Pizza from '../Details/Pizza'
import Contact from "../contact/Contact"
import { useTheme } from '../../context'
import Newsection from '../NewComponent/Newsection'
import { Link } from 'react-router-dom'
const ProductList = () => {
  const [item,setItem]=useState(4)
    useEffect(()=>{
     if(window.innerWidth > 768) {
    setItem(4)
    }
    else{
        setItem(1)
    }
  })
  const { darkMode } = useTheme();
  return (
   <>
      <div className={darkMode ? 'product dark-mode' : ' product white-mode'}>
      <h1>Features Product</h1>
       <div className="view">
       <Link to="/menu"><p>View menu</p></Link>
       </div>
  <div className="slider">
    
    <OwlCarousel
      className="owl-theme" items={item} loop margin={4} dots>
        <div className="item">
          <Item/>
        </div>
        <div className="item">
          <Item/>
        </div>
        <div className="item">
          <Item/>
        </div>
        <div className="item">
          <Item/>
        </div>
      </OwlCarousel>
  </div>
    </div>
<Card/>
<Pizza isDark={darkMode}/>
<Newsection/>
|<Contact/>

   </>
  )
}

export default ProductList

