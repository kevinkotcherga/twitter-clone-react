import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../utils/firebase.config';
import { getTweets } from '../../features/tweet.slice';
import Tweet from '../tweet/Tweet';

const Tweets = ({ user }) => {
  // useDispatch déclenche l'action, la logique du reducer
	const dispatch = useDispatch();
  // useSelector permet de récupérer la data qui est dans la store, envoyé depuis le dipatch
  const tweets = useSelector((state) => state.tweets.tweets);
  console.log(tweets);

  // GET MESSAGES
	useEffect(() => {
		// getDocs permet de récupérer la données avec firebase
		// db est le nom de la db que firebase doit aller récupérer
		// tweets est le nom de la collection à choisir
		// docs.map est la façon de faire pour récuprer la doc facilement
		getDocs(collection(db, 'tweets')).then(res =>
			dispatch(getTweets(res.docs.map(doc => ({ ...doc.data(), id: doc.id })))),
		);
	}, [dispatch]);


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
