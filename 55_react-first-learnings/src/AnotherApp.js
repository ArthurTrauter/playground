import { useState } from 'react';
import NameList from './NameList';
import Form from './Form';

function AnotherApp() {
	const [login, setLogin] = useState(false);

	const handleLogin = () => {
		setLogin(!login);
	}

	return (
		<>
			{login ? (
				<div>
					<p>Hier kannst du dich abmelden</p>
					<button onClick={handleLogin}>Logout</button>
				</div>
			) : (
				<div>
					<p>Hier kannst du dich gerne anmelden</p>
					<button onClick={handleLogin}>Login</button>
				</div>
			)}
			<div>
				<NameList />
			</div>
			<div>
				<Form />
			</div>

		</>
	);
}

export default AnotherApp;