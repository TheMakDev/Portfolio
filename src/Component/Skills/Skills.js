import React from 'react'
import "./skills.css"
import UI from "../../assets/ux.png"
import web from "../../assets/web.png"
import graphics from "../../assets/layers.png"

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What i do</span>
      <span className='skillDesc'>As a web developer, I design and build websites that are visually appealing, user-friendly, and responsive, ensuring they deliver a seamless experience while staying up-to-date and functional. I specialize in turning ideas into interactive and dynamic online solutions.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UI} alt='' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>UI/UX design</h2>
            <p>As a UI/UX designer, I craft intuitive and engaging user experiences by blending seamless functionality with visually appealing designs.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={web} alt='' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Web Development</h2>
            <p>
            As a web developer, I build functional, responsive, and user-focused websites that bring ideas to life online.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={graphics} alt='' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Graphics Design</h2>
            <p>As a graphic designer, I create visually compelling designs that communicate ideas effectively and leave a lasting impression.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills