import React from 'react';
// import logo from './assets/images/logo.svg';
import './App.scss';
import axios from 'axios';

function App() {

	async function authenticate () {
		let response = await axios.get('http://127.0.0.1:3333/auth/google')
        console.log("TCL: authenticate -> response", response)
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Aperte o botão para autenticar.
				</p>
				<button className="btn-teste" value="teste!" onClick={() => authenticate()}>Click me!</button>
			</header>
		</div>
		
	);
}

export default App;