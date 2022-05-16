import React from 'react';
import Tweet from '../tweet/Tweet';

const Tweets = ({ user, tweets }) => {

  return (
    <div>
      {/* Si il y a un élement dans posts, alors ils s'affichent */}
        {tweets &&
        // ... permet de déstructurer posts et jouer le map, sans ça l'application crash
          [...tweets]
            // trie de la date la plus grande(recente) à la plus petite(ancienne)
            .sort((a, b) => b.date - a.date)
            // map de posts pour envoyer la data à Post
            // post est le tableau de data
            // user est l'utilisateur connecté, il sert à verifier si l'autheur du post est connecté
            // si oui il peux modifier ses messages
            .map(tweet => <Tweet tweet={tweet} key={tweet.id} user={user} />)}
    </div>
  );
};

export default Tweets;
