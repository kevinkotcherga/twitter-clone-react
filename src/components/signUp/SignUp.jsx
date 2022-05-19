import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase.config';

const SignUp = () => {
  // useRef() récupèrent les valeurs dans le formulaire
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState("");

  // handleRegister est la fonction qui s'envoie quand submit est cliqué
  const handleRegister = (e) => {
    e.preventDefault();
    // try essaye d'effectuer la commande
    try {
      // auth et createUserWithEmailAndPassword créent un utilisateur avec Firebase
      auth.createUserWithEmailAndPassword(registerEmail.current.value, registerPassword.current.value)
      // then (la promesse) ne se déclenche qu'après l'éxecution de createUserWithEmailAndPassword
      // Ajout du pseudo dans la data, qui ne peut pas être fait précédement avec firebase
      .then(async (userAuth) => {
        // userAuth sont les valeurs email et password récupérés à qui sont ajoutés displayName
        await userAuth.user.updateProfile({
          displayName
        });
        await userAuth.user.updateProfile({
          photoURL
        });
        // window.location.reload rafraichit la page pour afficher la div de message
        window.location.reload();
      });
    // si try ne fonctionne pas, catch est effectué
    } catch(error) {
      console.log(error.message);
    };
    registerEmail('');
    registerPassword('');
  };

  return (
    <div className='signUp'>
      <form className="formSignUp" onSubmit={e => handleRegister(e)} >
        <input type="text" placeholder='Pseudo' required onChange={(e) => setDisplayName(e.target.value)} />
        <input type="text" placeholder='Photo url' onChange={(e) => setPhotoURL(e.target.value)} />
        <input type="email" placeholder='Email' required ref={registerEmail} />
        <input type="password" placeholder='Mot de passe' required ref={registerPassword} />
        <input type="submit" value="S'inscrire"/>
      </form>
      <span>Vous avez déjà un compte ? <Link to="login">Se connecter</Link></span>
    </div>
  );
};

export default SignUp;
