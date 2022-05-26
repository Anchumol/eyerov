import React from 'react'
import './Card.css'
import axios from '../axios/axios'
import { useEffect,useState } from 'react'
import FileSaver  from 'file-saver'
import saveAs from 'file-saver'
function Card() {
    const [pdf,setPdf]=useState("")
    const [Damimg, setDamimg] = useState('')
    const [Dam,setDam]=useState("")
  
    useEffect(() => {
        axios.get('/images').then((response)=>{
            console.log(response.data.damImage)
            setDamimg(response.data.damImage)
            axios.get('/dam-details').then((res)=>{
                    console.log(res.data)
                    setDam(res.data)
                    axios.get('/pdf-report').then((res)=>{
                        console.log(res.data)
                        setPdf(res.data)
                    })
            })
        })
    }, [])
    
  return (
        
         <div className='MainCard'>
                <div className='LeftCard'>
                     <div className='Content'>
                        <div className='feilds'><b style={{marginTop:30,marginLeft:10}}> Dam name</b>
                            <div className='text'>
                               <b> {Dam.damName}</b>
                            </div>
                        </div>
                        <div className='feilds'><b style={{marginTop:30,marginLeft:10}}>Project id</b>
                            <div className='text'>
                               <b> {Dam.projectId}</b>
                            </div>
                        </div>
                        <div className='feilds'><b style={{marginTop:30,marginLeft:10}}>Inspection Start Date</b>
                            <div className='text'>
                               <b> {Dam.inspectionStartDate}</b>
                            </div>
                        </div>
                        <div className='feilds'><b style={{marginTop:30,marginLeft:10}}>Inspection end Date</b>
                            <div className='text'>
                               <b> {Dam.inspectionEndDate}</b>
                            </div>
                        </div>
                        <div className='feilds'><b style={{marginTop:30,marginLeft:10}}>River</b>
                            <div className='text'>
                               <b> {Dam.river}</b>
                            </div>
                        </div>
                        <div className='feilds'><b style={{marginTop:30,marginLeft:10,width:600}}>Location of dam</b>
                            <div className='text'>
                               <b>{Dam.location}</b>
                            </div>
                        </div>
                        {/* <button className='Button'> */}
                        {/* </button> */}
                       <a href={pdf} target="blank"  download> <button className='Button'> Open Soft-Copy Report </button></a>
                    </div>
            </div>
            <div className='SubCard'>
                <img style={{width:"100%",height:'100%'}} src={Damimg}/>
            </div>
            
        </div>
       
       
  )
}

export default Card