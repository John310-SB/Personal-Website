import React from 'react';  
import '../styles/contact.css';
import connect from '../assets/connect.png';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';  
import EmailIcon from '@mui/icons-material/Email'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Contact (){  
    return (
    <div className='contactContainer'>
        <div className='contactTop'>
            <img className='connectImage' src={connect} alt="let's connect" />
        </div>
        <div className='contactInfo'>
            <div className='contentBlocks' >
                <PhoneIphoneIcon sx={{color: "#000", fontSize:30, backgroundColor:"#ccc", padding:"5px", borderRadius:"50px"}}/>
                <span className='contactMeta'>310 617 0112</span>
            </div>
            <div onClick={()=>{window.open("mailto:isozakijohn@gmail.com")}} className='contentBlocks'>
                <EmailIcon sx={{color: "#000", fontSize:30, backgroundColor:"#ccc", padding:"5px", borderRadius:"50px"}}/>
                <span className='contactMeta'>IsozakiJohn@gmail.com</span>
            </div>
            <div onClick={()=>{window.open(window.open("https://www.linkedin.com/in/john-isozaki-1b528524a/"))}} className='contentBlocks'>
                <LinkedInIcon sx={{color: "#000", fontSize:30, backgroundColor:"#ccc", padding:"5px", borderRadius:"50px"}}/>
                <span className='contactMeta'>https://www.linkedin.com/in/john-isozaki-1b528524a/</span>
            </div>
        </div>
        <div className='contactMap'>
        </div>
    </div>
    )  
}  
   
export default Contact;  