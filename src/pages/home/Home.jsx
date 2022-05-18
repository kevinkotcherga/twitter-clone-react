import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../utils/firebase.config';
import CreateTweet from '../../components/createTweet/CreateTweet';
import Tweets from '../../components/tweets/Tweets';
import './home.scss'
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';

const Home = ({ user, tweets }) => {
  return (
    <div className='home'>
      <div className="nav">
        <Navbar user={user}/>
      </div>
      <div className="center">
        <div className="centerContainer">
          <p>Accueil</p>
          <CreateTweet uid={user.uid} displayName={user.displayName} />
          <Tweets user={user} tweets={tweets} />
        </div>
      </div>
    <div className="right">
      <Widgets />
    </div>
    </div>
  );
};

export default Home;
