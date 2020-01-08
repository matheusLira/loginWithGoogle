import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';

function App() {

	function authenticate () {
		console.log("Chamando autenticação")
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Aperte o botão para autenticar.
				</p>
				<button value="teste!" onClick={() => authenticate()}>Click me!</button>
				
			</header>
		</div>
	);
}

export default App;