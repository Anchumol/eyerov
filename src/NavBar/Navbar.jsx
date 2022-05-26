
import React from 'react'
import "./NavBar.css"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
function Navbar() {
  const Logo = "https://media-exp1.licdn.com/dms/image/C510BAQESRqetFW3ctg/company-logo_200_200/0/1519897457481?e=2147483647&v=beta&t=SbDY9M3SGPRZvc5Ip5pUulXIKSys7RiAenxN44VPVPc";

  return (
    <div className="navBar"> 
        <div style={{display:'flex'}}>
             <div>
                <img className='logo' src={Logo} alt="" />
             </div>
              <div>
                <h1><span className='Color'>E</span><span className='ROV'>yeROV</span></h1>
              </div>
              <div>
                <h1><span className='Color' style={{marginLeft:'10px'}}>V</span><span className='ROV'>isualization</span></h1>
              </div>
              <div>
                <h1><span className='Color'>a</span><span className='ROV'>nd</span></h1>
              </div>
              <div>
                <h1><span className='Color'>A</span><span className='ROV'>nalytics</span></h1>
              </div>
              <div>
                <h1><span className='Color'>P</span><span className='ROV'>latform</span></h1>
              </div>
              <div className='options'>
                   <div className='homeIcon'> <HomeIcon/></div>
                   <div style={{marginTop:15}}><h2> <b>Home</b></h2></div>
                   <div className='homeIcon'> <InfoIcon/></div>
                   <div style={{marginTop:15}}><h2> <b>About</b></h2></div>
                   <div className='homeIcon'> <ForumIcon/></div>
                   <div style={{marginTop:15}}><h2> <b>Support</b></h2></div>
              </div>
        </div>
    </div>
  )
}

export default Navbar;