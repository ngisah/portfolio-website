import React from 'react'
import './Intro.css';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I am</span>
                <span>Edwin Ngisah</span>
                <span>Fullstack developer with experience in design, development,building and deploying high level web applications and producing high level work</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href='https://github.com/ngisah'>
                <img src={Github} alt='github'/>
                </a>
                <a href='https://www.linkedin.com/in/edwin-ngisah-028183202/'><img src={LinkedIn} alt='linkedIn'/></a>
                <a><img src={Instagram} alt='Instagram'/></a>
            
            </div>
            {/* <div className="i-right">
                right side
            </div> */}
        </div>

    </div>
  )
}

export default Intro