from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)


# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

CORS(app)


users = {
    'Bo': {'lastname': 'Liang'},
}


@app.route('/api/getname', methods=['POST'])
def getname():
    firstname = request.json.get('firstname')
    password = request.json.get('password')
    print(firstname)

    if firstname in users:
        print({'lastname': users[firstname]['lastname']})

        return jsonify({'lastname': users[firstname]['lastname']}), 200
    else:
        return jsonify({'message': 'User Not Found'}), 401


if __name__ == '__main__':
    app.run(debug=True)
