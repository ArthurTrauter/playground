import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("");
	useEffect(() => {
		document.title = `Du hast ${count} Mal geklickt`;
	}, [count]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (count > 0) {
				setCount(count - 1);
			}
		}, 500)
		return () => clearTimeout(timeout);
	}, [count]);

	function handleButtonClick() {
		setCount(count + 1);
	}

	const handleTextField = (event) => {
		setText(event.target.value);
	}
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hallo Welt,</h1>
				<img src={logo} className="App-logo" alt="logo" />
				<div>Du hast mich {count} mal gecklickt</div>
				<button onClick={handleButtonClick}>Klick mich</button>
				<input value={text} onChange={handleTextField} />
			</header>
		</div>
	);
}

export default App;
