import { auth } from '../../utils/firebase.config';
import { signOut } from 'firebase/auth';

const Profil= () => {
  // handleLogout est appelé au clique du button
	const handleLogout = async () => {
	// SignOut est une méthode de firebase qui permet la déconnexion
	// C'est auth qui sera signOut
	await signOut(auth);
	};

  return (
    <div className="App">
      <button onClick={() => handleLogout()}>Deconnexion</button>
    </div>
  );
}

export default Profil;
