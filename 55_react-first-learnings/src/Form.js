import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label style={{"margin-left": 1 + 'rem'}}>
                Name: <input type='text' name='name' value={name} onChange={handleChange} />
            </label>
            <input type='submit' value='Absenden' />
        </form>
    );
};