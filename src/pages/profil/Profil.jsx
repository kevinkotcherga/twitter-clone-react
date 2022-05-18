import { signOut } from 'firebase/auth';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../../utils/firebase.config';

const Profil = () => {
  // handleLogout est appelé au clique du button
	const handleLogout = async () => {
	// SignOut est une méthode de firebase qui permet la déconnexion
	// C'est auth qui sera signOut
	await signOut(auth);
	};

  return (
    <div>
      <h1>Profil</h1>
      <button onClick={() => handleLogout()}>Deconnexion</button>
    </div>
  );
};

export default Profil;
