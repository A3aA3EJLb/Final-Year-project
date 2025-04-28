import React, { useState } from "react";
import axios from "axios";

function App() {
    const [file, setFile] = useState(null);
    const [replayData, setReplayData] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadReplay = async () => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:5000/upload", formData);
            setReplayData(response.data);
        } catch (error) {
            console.error("Error uploading replay", error);
        }
    };

    return (
        <div>
            <h2>Upload SC2 Replay</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadReplay}>Upload</button>

            {replayData && (
                <div>
                    <h3>Replay Data</h3>
                    <p>Map: {replayData.map}</p>
                    <p>Game Length: {replayData.game_length}</p>
                    <h4>Players:</h4>
                    <ul>
                        {replayData.players.map((player, index) => (
                            <li key={index}>
                                {player.name} ({player.race}) - {player.result}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


export default App;
