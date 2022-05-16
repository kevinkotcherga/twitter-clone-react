import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase.config';
import Home from './components/home/Home';
import TweetId from './components/tweetId/TweetId';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { getTweets } from './features/tweet.slice';
import { db } from './utils/firebase.config';

function App() {
	const [user, setUser] = useState(null);
	// useDispatch déclenche l'action, la logique du reducer
	const dispatch = useDispatch();
	// useSelector permet de récupérer la data qui est dans la store, envoyé depuis le dipatch
	const tweets = useSelector(state => state.tweets.tweets);

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

	// onAuthStateChanged est une méthode de firebase qui surveille chaque changement d'authentification
	// onAuthStateChanged regarde dans auth si un utilisateur est présent
	onAuthStateChanged(auth, currentUser => {
		// currentUser est passé dans setUser et peut-être utilisé dans l'application
		// user aura les données de
		setUser(currentUser);
	});

	return (
		<div className="app">
			<Routes>
				<Route
					path="/"
					element={user ? <Home user={user} tweets={tweets} /> : <SignUp />}
				/>
				<Route
					path="/login"
					element={user ? <Home user={user} tweets={tweets} /> : <Login />}
				/>
				<Route path="/tweet/:id" element={<TweetId />}></Route>
			</Routes>
		</div>
	);
}

export default App;
