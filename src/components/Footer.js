import { FaHome ,FaMailBulk, FaPhone } from 'react-icons/fa'
import { BsGithub,BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import './FooterStyle.css'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-container'>
    <div className='left'>
      <div className='location'>
        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
        <div>
          <p>Gorakhpur, Uttar pradesh</p>
        </div>
      </div>
      <div className='phone'>
      <h4>
      <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
      8957705773
      </h4>
      </div>
      <div className='email'>
      <h4>
      <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
      ps028ideal@gmail.com
      </h4>
      </div>
    </div>
    <div className='right'>
    <h4>Contact me</h4>
      <p>I am interested in working with any organization that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know.</p>
      <div className='social'>
      <a href="https://github.com/pragati-sriv" target="_blank" rel="noreferrer"
          title="Github">
      <BsGithub size={30} style={{color:"#808080", marginRight:"2rem"}}/>
      </a>
      <a href="https://www.linkedin.com/in/pragati-srivastava-a7299822b/" target="_blank" rel="noreferrer"
          title="linkden">
      <BsLinkedin size={30} style={{color:"#00", marginRight:"2rem"}}/></a>
    
      <a href='https://www.instagram.com/_pragati.sriv_/' target="_blank" rel="noreferrer"
          title="instagram">
      <FiInstagram size={30} style={{color:"#8a3ab9", marginRight:"2rem"}}/></a>
      
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
