import { useState } from "react";

import '../styles/TopNavBar.scss';
import logo_and_name from '../assets/logo/logo-and-name.svg'

import profile from '../assets/temp/profile_pics_6.png'

import PlusSign from './PlusSign';


function TopNavBar() {

  const [logged, setlogged] = useState(true);


  return (
    <div className="top-nav-bar">
      <div className='top-nav-bar__left'>
        <div className='left__logo'>
        <img src={logo_and_name} alt="logo" />
        </div>
      </div>

      {logged ?
        <div className='top-nav-bar__right'>

          <div className='right__add'>
            < PlusSign />
          </div>
          <div className='right__user'>
            <img src={profile} alt="" /> 
          </div>
        </div>
      : <div className='top-nav-bar__right'>
          <div>
            <strong>Log In</strong>
          </div>
        </div>
      }

    </div>
  );
}

export default TopNavBar;