import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase.config';
import { addTweet, getTweets } from '../../features/tweet.slice';

const CreateTweet = ({ uid, displayName }) => {
  const message = useRef();
  // useDispatch déclenche l'action, la logique du reducer
  const dispatch = useDispatch();

  const handleTweet = async (e) => {
    e.preventDefault();

    // data récupère les informations pour les envoyers à la db
    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
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
        <form onSubmit={(e) => handleTweet(e)}>
          <textarea placeholder='Message...' ref={message}></textarea>
          <input type="submit" />
        </form>
    </div>
  );
};

export default CreateTweet;
