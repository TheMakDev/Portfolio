import React from 'react'
import "./intro.css"
import btnImg from "../../assets/employee.png"
import bg from "../../assets/bn.png"
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span>I'm <span className='introName'>Samuel</span> <br/> Website Developer</span>
            <p className='introPara'>I am an experienced web developer with a strong background <br/> in creating dynamic, responsive, and user-friendly websites <br/> using modern frameworks and technologies.</p>
            <Link><button className='btn' ><img src={btnImg} className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} className='bg'/>
    </section>
  )
}

export default Intro