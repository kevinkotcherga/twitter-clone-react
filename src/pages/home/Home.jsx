import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../utils/firebase.config';
import CreateTweet from '../../components/createTweet/CreateTweet';
import Tweets from '../../components/tweets/Tweets';
import './home.scss'

const Home = ({ user, tweets }) => {
  // handleLogout est appelé au clique du button
	const handleLogout = async () => {
		// SignOut est une méthode de firebase qui permet la déconnexion
		// C'est auth qui sera signOut
		await signOut(auth);
	};

  return (
    <div className='home'>
      <div className="nav">
        <span>nav</span>
        <button onClick={() => handleLogout()}>Deconnexion</button>
      </div>
      <div className="center">
        <div className="centerContainer">
          <h1>Hello @{user?.displayName}</h1>
          <CreateTweet uid={user.uid} displayName={user.displayName} />
          <Tweets user={user} tweets={tweets} />
        </div>
      </div>
    <div className="right">
      <span>right</span>
    </div>
    </div>
  );
};

export default Home;
