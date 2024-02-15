export default function Header({ title }) {
	console.log(title);
	return <h1>{title ? title : 'Default Title'}</h1>;
}