import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/jslogo.png"
import ContactImg from "../../assets/chat.png"
import Menu from "../../assets/menu.png"
import {Link} from 'react-scroll'

const Navbar = () => {
  const[showmenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
                <Link className='desktopMenuListItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                <Link className='desktopMenuListItem'  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
                <Link className='desktopMenuListItem'  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
                <Link className='desktopMenuListItem'  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}>Client </Link>
        </div>
            <button className='desktopMenuBtn' onClick={()=> (
              document.getElementById("contact").scrollIntoView({behavior:'smooth'})
            )}>
                <img src={ContactImg} className='desktopMenuImg'/>
                Contact Me
            </button>
            <img src={Menu} alt='logo' className='mobMenu' onClick={()=> setShowMenu(!showmenu)}/>
            <div className='navMenu' style={{display : showmenu? "flex": "none"}}>
                <Link className='listItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(!showmenu)}>Home</Link>
                <Link className='listItem'  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showmenu)}>About</Link>
                <Link className='listItem'  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showmenu)}>Portfolio</Link>
                <Link className='listItem'  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showmenu)}>Client </Link>
                <Link className='listItem'  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showmenu)}>Contact </Link>
        </div>
    </nav>
  )
}

export default Navbar