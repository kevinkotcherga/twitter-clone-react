  // handleLogout est appelé au clique du button
	const handleLogout = async () => {
	// SignOut est une méthode de firebase qui permet la déconnexion
	// C'est auth qui sera signOut
	await signOut(auth);
	};

<button onClick={() => handleLogout()}>Deconnexion</button>
