import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../utils/firebase.config';
import './navbars.scss';
import { ImTwitter } from "react-icons/im";
import { RiHome7Fill } from "react-icons/ri";
import { FaHashtag, FaRegEnvelope } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineInbox } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettingsEthernet } from "react-icons/md";
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
      <ImTwitter color='#1F9EF7'/>
        <ul>
          <li><RiHome7Fill />Accueil</li>
          <li><FaHashtag />Explorer</li>
          <li><IoNotificationsOutline />Notifications</li>
          <li><FaRegEnvelope />Messages</li>
          <li><AiOutlineInbox />Signets</li>
          <li><BsCardList />Listes</li>
          <Link to="users/:id"><li><CgProfile />Profil</li></Link>
          <li><MdOutlineSettingsEthernet />Plus</li>
        </ul>
        <button className='buttonTweeter'>Tweeter</button>
        <button onClick={() => handleLogout()}>Deconnexion</button>
    </div>
  );
};

export default Navbar;
