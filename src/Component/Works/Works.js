import React from 'react'
import "./works.css"
import Portfolio1 from "../../assets/web.jpg"
import webdev from "../../assets/webdev2.jpg"
import graphics from "../../assets/graphics2.jpg"
import ui from "../../assets/ui.jpg"
import graphics1 from "../../assets/graphics1.jpg"
import ui2 from "../../assets/ui2.jpg"

const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workDesc'>Design and develop responsive, user-friendly websites tailored to client needs. Implement modern technologies for performance, security, and SEO optimization. Provide ongoing support, updates, and feature enhancements.</span>
        <div className='worksImgs'>
          <img src={Portfolio1} className='worksImg' />
          <img src={webdev} className='worksImg' />
          <img src={graphics} className='worksImg' />
          <img src={ui} className='worksImg' />
          <img src={graphics1} className='worksImg' />
          <img src={ui2} className='worksImg' />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works