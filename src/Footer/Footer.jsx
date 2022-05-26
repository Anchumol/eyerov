import React from 'react'
import './Footer.css'
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='footer'>
        <div className='MinBox'>
          <div className='IconContiner'>
              <LanguageIcon/><span className='Text'>www.eyerov.com.<br></br> </span>
              <EmailIcon/><span className='Text'>info@eyerov.com</span>
          </div>
          <div className='TextContainer'>
                     <span className='Text2'>@2021 EyeROV(IROV Technologies Pvt. Ltd.)</span>
          </div>
          <div className='TextContainer'>
                     <span className='Text3'>Version 2.0.0</span>
          </div>
        </div>
    </div>
  )
}

export default Footer