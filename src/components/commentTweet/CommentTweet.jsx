import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment, getComments } from '../../features/tweet.slice';
import { auth, db } from '../../utils/firebase.config';
import CommentCard from '../commentCard/CommentCard';

const CommentTweet = ({ tweet }) => {
  const [user, setUser] = useState(null);
  const answerContent = useRef();
  const dispatch = useDispatch();
  	// onAuthStateChanged est une méthode de firebase qui surveille chaque changement d'authentification
	// onAuthStateChanged regarde dans auth si un utilisateur est présent
	onAuthStateChanged(auth, currentUser => {
		// currentUser est passé dans setUser et peut-être utilisé dans l'application
		// user aura les données de
		setUser(currentUser);
	});

  const handleComment = (e) => {
    e.preventDefault();

    let data = [];
    // Si la data comments est vide alors le commentaire s'ajoutera à la data
    if (tweet.comments === null) {
      data = [
        {
          commentAuthor: user.displayName,
          text: answerContent.current.value
        },
      ];
      // Si le data n'est pas vide alors la data de post.comments est récupéré (avec ...)
    } else {
      data = [
        ...tweet.comments,
        // et le nouveau message est ajouté à la suite
        {
          commentAuthor: user.displayName,
          text: answerContent.current.value
        },
      ];
    };

    // UPDATE LA DATA POUR METTRE A JOUR LES COMMENTAIRES

    // updateDoc permet d'update la data
    // db est le nom de la db que firebase doit aller chercher
    // posts est le nom de la collection à choisir
    // post.id est le post à éditer
    // comments: data ici c'est comments qui prendra la valeur de data dans la db
    updateDoc(doc(db, 'tweets', tweet.id), { comments: data }).then(() => {
      // addComment ne prend en compte qu'un élément
      // C'est donc stocké dans un tableau
      // On pourra chosir dedans avec [0], [1], etc..
      dispatch(addComment([tweet.id, data]));
      // dispatch envera l'id du post à éditer et la data du message (commentaire) à envoyer
      answerContent.current.value = '';
    });
  };
  return (
    <div>
      {/* && veux dire est-ce que c'est true, si oui affiche la suite */}
      {tweet.comments.map((comment, index) => (
        <CommentCard comment={comment} key={index}/>
      ))}
      {/* Si l'utilisateur est connecté alors il peut poster un commentaire
      sinon un message s'affichera */}
        <form onSubmit={(e) => handleComment(e)}>
          <textarea placeholder='Envoyer un commentaire' ref={answerContent}></textarea>
          <input type="submit" value="Envoyer" />
        </form>
    </div>
  );
};

export default CommentTweet;
