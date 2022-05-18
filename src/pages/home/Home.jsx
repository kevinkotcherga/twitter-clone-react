import React from 'react';
import CreateTweet from '../../components/createTweet/CreateTweet';
import Tweets from '../../components/tweets/Tweets';
import './home.scss'
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';
import ProfilContainer from '../../components/profilContainer/ProfilContainer';
import Messages from '../../components/messages/Messages';

const Home = ({ user, tweets }) => {
  return (
    <div className='home'>
      <div className="nav">
        <Navbar user={user}/>
        <div className='profilContainer'>
          <ProfilContainer user={user}/>
        </div>
      </div>
      <div className="center">
        <div className="centerContainer">
          <CreateTweet uid={user.uid} displayName={user.displayName} />
          <Tweets user={user} tweets={tweets} />
        </div>
      </div>
    <div className="right">
      <Widgets />
      <div className='messageContainer'>
        <Messages />
      </div>
    </div>
    </div>
  );
};

export default Home;
