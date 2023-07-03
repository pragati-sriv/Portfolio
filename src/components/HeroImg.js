import './HeroImgStyle.css'
import React from 'react'
import IntroImg from '../assets/developer3.jpg'
import { Link } from 'react-router-dom'

function HeroImg() {
  return (
    <div className='hero'>
      <div className='mask'>
      <img className='into-img' src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=600" alt="intro"/>
      </div>
      <div className='content1'>
    <p>Hi, I am Pragati Srivastava</p>
    <h1>React Developer</h1>
    <div>
        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/about" className='btn btn-light'>About</Link>
    </div>
      </div>
    </div>
  )
}

export default HeroImg
