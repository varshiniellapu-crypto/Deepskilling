import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 67 },
        { name: "KL Rahul", score: 74 },
        { name: "Hardik Pandya", score: 58 },
        { name: "Ravindra Jadeja", score: 76 },
        { name: "Rishabh Pant", score: 69 },
        { name: "Suryakumar Yadav", score: 91 },
        { name: "Mohammed Shami", score: 45 },
        { name: "Jasprit Bumrah", score: 72 },
        { name: "Kuldeep Yadav", score: 61 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div style={{ margin: "20px" }}>
            <h1>List of Players</h1>

            <h3>All Players</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>
            <ul>
                {below70.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;