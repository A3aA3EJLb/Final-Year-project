from flask import Flask, request, jsonify
from flask_cors import CORS
import sc2reader

app = Flask(__name__)
CORS(app)  # Allow requests from React

@app.route('/upload', methods=['POST'])
def upload_replay():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        replay = sc2reader.load_replay(file, load_map=True)

        data = {
            "map": replay.map_name,
            "game_length": str(replay.game_length),
            "players": [
                {
                    "name": p.name,
                    "race": p.play_race,
                    "result": p.result
                } for p in replay.players
            ]
        }
        return jsonify(data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
