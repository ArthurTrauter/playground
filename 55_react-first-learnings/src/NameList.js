export default function NameList() {

    const users = [
        { name: 'Arthur', age: 44 },
        { name: 'Irina', age: 40 },
        { name: 'Tim', age: 12 },
        { name: 'Lina', age: 9 }
    ];

    const update = users.map((user, id) => (
        <li key={id}>{user.name}, {user.age}</li>
    ));

    return (
        <ul>
            {update}
        </ul>
    );
}