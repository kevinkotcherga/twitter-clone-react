import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../utils/firebase.config';
import './navbar.scss';
import { ImTwitter } from "react-icons/im";
import { RiHome7Fill } from "react-icons/ri";
import { FaHashtag, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <div className='navbar'>
      <div className='container'>
        <ImTwitter className='logoTwitter'/>
          <ul>
            <li>
              <span>
                <RiHome7Fill className='logo' />
                <p>Accueil</p>
              </span>
            </li>
            <li>
              <span>
                <FaHashtag className='logo'/>
                <p>Explorer</p>
              </span>
            </li>
            <li>
              <span>
                <MdOutlineNotificationsNone className='logo'/>
                <p>Notifications</p>
              </span>
            </li>
            <li>
              <span>
                <FaRegEnvelope className='logo'/>
                <p>Messages</p>
              </span>
            </li>
            <li>
              <span>
                <AiOutlineInbox className='logo'/>
                <p>Signets</p>
              </span>
            </li>
            <li>
              <span>
                <BsCardList className='logo'/>
                <p>Listes</p>
              </span>
            </li>
            <Link to="/profil">
              <li>
                <span>
                  <CgProfile className='logo'/>
                  <p>Profil</p>
                </span>
              </li>
            </Link>
            <li>
              <span>
                <HiOutlineDotsCircleHorizontal className='logo'/>
                <p>Plus</p>
              </span>
            </li>
          </ul>
          <button className='buttonTweeter'>Tweeter</button>
        </div>
    </div>
  );
};

export default Navbar;
