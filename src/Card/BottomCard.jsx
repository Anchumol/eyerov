import React, { useState } from 'react'
import './BottomCard.css'
import axios from '../axios/axios'
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { useEffect } from 'react'
function BottomCard() {
  const [image,SetImage] = useState("")
  useEffect(() => {
    axios.get('/images').then((res)=>{
      console.log(res.data)
      SetImage(res.data)
    })
  }, [])
  
  return (
  <div>
    <div className='CardBottom' >
         <div className='FirstCard'>
             <div>
                 <h5 className='Text'>EyeROV Inspection</h5>
                 <img className='Img' src={image.rovImage}/>
                <div style={{display:'flex'}}>
                <button className='btn1'><div style={{display:'flex'}}><FolderIcon/> <span className='btnText'>Open Project</span></div></button>
                 <button className='btn2'><div style={{display:'flex'}}><DescriptionIcon/> <span className='btnText2'>Report Outcome</span></div></button>
                </div>
             </div>
         </div>
       
        <div>
        </div>
       <div className='SecondCard'>

       <div>
                 <h5 className='MainText'>Diver's Inspection </h5>
                 <img className='Img2' src={image.diverImage}/>
                <div style={{display:'flex'}}>
                <button className='btn1'><div style={{display:'flex'}}><FolderIcon/> <span className='btnText'>Open Project</span></div></button>
                 <button className='Secondbtn2'><div style={{display:'flex'}}><DescriptionIcon/> <span className='btnText2'>Report Outcome</span></div></button>
                </div>
             </div>
      </div>
       
    </div>


    <div className='btm'>

    </div>
  </div>
  )
}

export default BottomCard