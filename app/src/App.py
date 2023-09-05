from flask import Flask, request, jsonify

app = Flask('employees')

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.get_json()
    # Here, you can handle the form data, e.g., save it to a database
    return jsonify({"message": "Data received successfully"})

if __name__ == '__main__':
    app.run(debug=True)
