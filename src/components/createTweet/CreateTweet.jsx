import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase.config';
import { addTweet, getTweets } from '../../features/tweet.slice';
import './createTweet.scss'

const CreateTweet = ({ uid, displayName, photoURL }) => {
  const message = useRef();
  // useDispatch déclenche l'action, la logique du reducer
  const dispatch = useDispatch();

  function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleTweet = async (e) => {
    e.preventDefault();

    // data récupère les informations pour les envoyers à la db
    const data = {
      author: displayName,
      picture: photoURL,
      like: randomIntFromInterval(1, 50),
      retweet: randomIntFromInterval(1, 50),
      authorId: uid,
      message: message.current.value,
      // comments: null,
      comments: randomIntFromInterval(1, 10),
      date: Date.now()
    }
    // CREATE

    // Envoyer la data à firebase
    // db est le nom de la db que firebase doit aller chercher
    // posts est le nom de la collection à choisir
    // data est ce qui sera envoyé dans la db
    await addDoc(collection(db, "tweets"), data).then(() => {
      // then récupère les informations et envoie ça dans le store avec dispatch et addPost
      // il prend en paramètre data qui sera le payload
      dispatch(addTweet(data));
      // getPosts et appellé après le create pour récupérer la base de donnée et l'id instantanément pour pouvoir éditer si on veux apres avoir créer le message
      getDocs(collection(db, 'tweets')).then(res =>
			dispatch(getTweets(res.docs.map(doc => ({ ...doc.data(), id: doc.id })))),
		);
      message.current.value = '';
    });
  };

  return (
    <div className='createTweet'>
      <span>Accueil</span>
        <div className='containerForm'>
          <form onSubmit={(e) => handleTweet(e)}>
            <div className='containerText'>
              <img src={photoURL} alt="" />
              <textarea placeholder='Quoi de neuf ?' ref={message}></textarea>
            </div>
            <input type="submit" value='Tweeter'/>
          </form>
        </div>
    </div>
  );
};

export default CreateTweet;
