import React, { useRef } from 'react'
import "./contact.css"
import Peterpan from "../../assets/peterpan.png"
import Mssl from "../../assets/MSSL.png"
import PGS from "../../assets/logop.png"
import ibp from "../../assets/ibp.jpg"
import facebook from "../../assets/facebook.png"
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import linkedIn from "../../assets/linkedin.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1hemmk4', 'template_ajjr4z7', form.current, {
        publicKey: 'FGfQ1fKz-t8SPeB1G',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent!!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>
                I have had opportunity to work with diverse group of Companies some of the notable conpanies I have worked with Includes
            </p>
            <div className='clientImgs'>
                <img src={Peterpan} className='clientImg'/>
                <img src={Mssl} className='clientImg'/>
                <img src={PGS} className='clientImg'/>
                <img src={ibp} className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='conatactDesc'>Please fill out the form below to discuss my work opportunity</span>
          <form ref={form} className='contactForm' onSubmit={sendEmail}>
              <input type='text' className='name' placeholder='Your name' name='your_name'/>
              <input type='email' className='email' placeholder='Your Email' name='your_email'/>
              <textarea className='message' name='message' rows={5} placeholder='Your Message'></textarea>
              <button type='submit' className='submit' value="send" >Submit</button>

              <div className='links'>
                  <img src={facebook} className='link' alt='client'/>
                  <img src={whatsapp} className='link' alt='client'/>
                  <img src={instagram} className='link' alt='client'/>
                  <img src={linkedIn} className='link' alt='client'/>
              </div>
          </form>
        </div>
    </section>
  )
}

export default Contact