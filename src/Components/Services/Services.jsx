import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Edwin_Ngisah_cv.pdf'

const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
       <div className="awesome">
        <span>My awesome</span>
        <span>Services</span>
        <span>lrem ipsum is dummy text for some wried reason<br/>
        and i have to break it badly blah blah blah</span>
        <a href={Resume} download>
          <button className="button s-button">Download cv</button>
        </a>
       </div>
       {/* right side */}
       

       <div className="cards">

        <div style={{left:'14rem'}}>
          <Card
          emoji = {HeartEmoji}
          heading={'Design'} 
          detail = {'figma, sketch, photoshop, Adobe'}
          />
        </div>

        <div style={{top:'12rem', left:'-4rem'}}>
          <Card 
            emoji={Glasses}
            heading={'Developer'}
            detail={'javascript, html, css, nodejs, React'}

          />
        </div>
        <div style={{top:'19rem', left:'12rem'}}>
          <Card 
            emoji={Humble}
            heading={'Ui/Ux'}
            detail={'javascript, html, css, nodejs, React'}

          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>


       </div>
    </div>
  )
}

export default Services