import React from 'react';  
import { useEffect, useState } from 'react';
import '../styles/project.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CR1 from '../assets/CR1.PNG';
import CR2 from '../assets/CR2.PNG';
import CR3 from '../assets/CR3.PNG';
import persWeb from '../assets/personalSite.png';
import cash from '../assets/team.png'
   
function Projects (){  
    const { value } = useSelector((state) => state.tour);
    const [redVal , setRedVal] = useState(value);    
    const navigate = useNavigate()
    
    useEffect(() => {
        if(redVal){
        setTimeout(()=>{navigate('/contact', { replace: true });},25000)}
        clearTimeout();
        return
    },[]);

    useEffect(() => {
        setRedVal(value)
        console.log(value, "rerender")
    })

    return(
    <div className='projectContainer'>
        <div className='cardRealm'>
            <img className='crImages' src={CR1} alt="Card Realm Image" />
            <img className='crImages' src={CR2} alt="Card Realm Image" />
            <img className='crImages' src={CR3} alt="Card Realm Image" />
            <div className='descriptionContainer'>
                <div className='projectTitles'>Card Realm</div>
                <div className='descTitle'>Description</div>
                <div className='projectDescription'>Card Realm is a mobile marketplace created for trading card collectors.  It is launched on both the app store and play store.  User's can buy and sell, as well as make offers and print shipping labels.
                </div>
                <div className='descTitle'>Contributions</div>
                <div className='projectDescription'>Founder and Lead Frontend Development.</div>
                <div className='deployButton' onClick={()=>{window.open("https://apps.apple.com/us/app/card-realm/id1608572895")}}>View on App Store</div>
            </div>
        </div>
        <div className='personal'>
            <img className="crImages" src={persWeb} alt="Card Realm Image" />
            <div className='descriptionContainer'>
                <div className='projectTitles'>Personal Website</div>
                <div className='descTitle'>Description</div>
                <div className='projectDescription'>Personal Website displaying many fundamentals of web design including CSS, HTML, Javascript.</div>
                <div className='descTitle'>Contributions</div>
                <div className='projectDescription'>Utilized Redux and React.</div>
                <div className='deployButton'  onClick={()=>{window.open("https://github.com/John310-SB")}}>View on Github</div>
            </div>
        </div>
        <div className='cashier'>
            <img className="crImages2" src={cash} alt="Card Realm Image" />            
            <div className='descriptionContainer'>
                <div className='projectTitles'>Team Generator</div>
                <div className='descTitle'>Description</div>
                <div className='projectDescription'>User's can input names and amount of teams. Then they can generate random teams.</div>
                <div className='descTitle'>Contributions</div>
                <div className='projectDescription'>Utilized Angular, Semantic CSS, and Typescript.</div>
                <div className='deployButton' onClick={()=>{window.open("https://github.com/John310-SB")}}>View on Github</div>
            </div>
        </div>
    </div> 
    ) 
}  
   
export default Projects;  