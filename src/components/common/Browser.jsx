import '.././../styles/css/main.css';

import { useState } from "react";

function Browser() {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `https://api.example.com/users?search=${searchTerm}`
        );
        const data = await response.json();
        setUsers(data);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearchSubmit(event);
        }
    };

    return (
        <div className="browser-box">
            <form className="form1">
                    <input
                        className="input1"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                        />
                        <img className='imgLupa' src="../../../../public/images/pngwing.png" alt="" />
            </form>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}

export default Browser;
