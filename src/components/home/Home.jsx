import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../utils/firebase.config';
import CreateTweet from '../createTweet/CreateTweet';
import Tweets from '../tweets/Tweets';

const Home = ({ user, tweets }) => {
  // handleLogout est appelé au clique du button
	const handleLogout = async () => {
		// SignOut est une méthode de firebase qui permet la déconnexion
		// C'est auth qui sera signOut
		await signOut(auth);
	};

  return (
    <div className='home'>
      <h1>Hello @{user?.displayName}</h1>
      <button onClick={() => handleLogout()}>Deconnexion</button>
      <CreateTweet uid={user.uid} displayName={user.displayName} />
      <Tweets user={user} tweets={tweets} />

    </div>
  );
};

export default Home;
