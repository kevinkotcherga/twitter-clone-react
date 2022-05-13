import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase.config';
import Home from './components/home/Home';

function App() {
	const [user, setUser] = useState(null);

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
          element={user ? <Home user={user} /> : <SignUp />}
        />
				<Route
					path="/login"
					element={user ? <Home user={user} /> : <Login />}
				/>
			</Routes>
		</div>
	);
}

export default App;
