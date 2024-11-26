import React, { useEffect, useState } from 'react'
import NetflixLogo from '../../assets/images/NetflixLogo.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './header.css'

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				setShow(true);
			} else setShow(false);
		})
	},[])

  return (
    <div className={`header-outer-container ${show && "nav-black"}`}>
    <div className='header-container'>
       <div className='header-left'>
        <ul>
            <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
        </ul>
       </div>
       <div className='header-right'>
        <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
        </ul>
       </div>
    </div>
    </div>
  )
}

export default Header