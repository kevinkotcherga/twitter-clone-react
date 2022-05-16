import { createSlice } from '@reduxjs/toolkit';

export const tweetSlice = createSlice({
	// 1) UN NOM
	name: 'tweets',
	// 2) UN STATE DE BASE
	initialState: {
		tweets: null,
	},
	// 3) REDUCERS
	reducers: {
		// GET

		// Quand l'action est appelée, le state est récupéré (la data, au début de base nul)
		// action.payload = { payload } sont les données que l'on récupère en paramètre
		// le payload est tout le paramètre qui est donné dans App.js : (dispatch(getPosts(res.docs.map(doc => ({ ...doc.data(), id: doc.id }))))
		getTweets: (state, { payload }) => {
			state.tweets = payload;
		},

		// CREATE

		addTweet: (state, { payload }) => {
			// push ajoute l'action que l'on récupère en paramètre avec le dispatch dans
			state.tweets.push(payload);
		},

		// DELETE
		deleteTweet: (state, { payload }) => {
			// Le state est filtré et est gardé dans le state tous les élements qui ne sont pas dans le payload
			state.tweets = state.tweets.filter(element => element.id !== payload);
		},
		// GET

		// Quand l'action est appelée, le state est récupéré (la data, au début de base nul)
		// action.payload = { payload } sont les données que l'on récupère en paramètre
		// le payload est tout le paramètre qui est donné dans App.js : (dispatch(getPosts(res.docs.map(doc => ({ ...doc.data(), id: doc.id }))))
		getComments: (state, { payload }) => {
			state.tweets.comments = payload;
		},

		// CREATE COMMENTS
		addComment: (state, { payload }) => {
			// chaque élement est appelé individuellement dans le map (post)
			state.tweets = state.tweets.map(tweet => {
				// il faut trouver dans quel post placer le commentaire
				// si l'id du post est egal à l'id envoyé dans le payload alors le commentaire lui sera ajouté
				if (tweet.id === payload[0]) {
					// il faura donc retourné toute la base de donnée
					return {
						...tweet,
						// et sera ajouté le payload 1, qui est la data envoyé avec le dispatch
						comments: payload[1],
					};
				} else {
					return tweet;
				}
			});
		},
	},
});

// EXPORT DES SLICES
export const { getTweets, addTweet, deleteTweet, addComment, getComments } =
	tweetSlice.actions;
export default tweetSlice.reducer;
