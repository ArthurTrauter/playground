export default function Profile() {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <div>
                <img
                src={avatar}
                alt={description}
                />
            </div>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
  }
  