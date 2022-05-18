import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../utils/firebase.config';
import './navbars.scss';
import { ImTwitter } from "react-icons/im";
import { RiHome7Fill } from "react-icons/ri";
import { FaHashtag, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  // handleLogout est appelé au clique du button
	const handleLogout = async () => {
	// SignOut est une méthode de firebase qui permet la déconnexion
	// C'est auth qui sera signOut
	await signOut(auth);
	};
  return (
    <div className='navbar'>
      <div className='container'>
        <ImTwitter color='#1F9EF7' size={'25px'}/>
          <ul>
            <li><span><RiHome7Fill size={'25px'}/></span>Accueil</li>
            <li><span><FaHashtag size={'25px'}/></span>Explorer</li>
            <li><span><MdOutlineNotificationsNone size={'25px'}/></span>Notifications</li>
            <li><span><FaRegEnvelope size={'25px'}/></span>Messages</li>
            <li><span><AiOutlineInbox size={'25px'}/></span>Signets</li>
            <li><span><BsCardList size={'25px'}/></span>Listes</li>
            <Link to="users/:id"><li><span><CgProfile size={'25px'}/></span>Profil</li></Link>
            <li><span><FiSettings size={'25px'}/></span>Plus</li>
          </ul>
          <button className='buttonTweeter'>Tweeter</button>
          <button onClick={() => handleLogout()}>Deconnexion</button>
        </div>
    </div>
  );
};

export default Navbar;
