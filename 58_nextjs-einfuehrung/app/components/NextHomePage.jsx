import LikeButton from './LikeButton';
import Header from './Header';

export default function NextHomepage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
	return (
		<div>
			<Header title="Develop. Preview. Ship." />
			<ul>
				{names.map((name) => {
					return <li key={name}>{name}</li>;
				})}
			</ul>
			<LikeButton />
		</div>
	);
};