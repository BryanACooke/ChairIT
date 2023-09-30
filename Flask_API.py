from flask import Flask
from flask import request
import mysql.connector

endpoint = "localhost"
username = "root"
password_ = "P09/01/2002"
data_base = "hackaton_base"

Connection = mysql.connector.connect(
    user = username,
    password = password_,
    host = endpoint,
    database = data_base
    )
Cursor = Connection.cursor() 


app = Flask(__name__)
app.secret_key= "iforgotthekey"

@app.route("/")
def start():
    return({"Status": "Online"})


@app.route("/login", method=['GET'])
def login():
    log = request.json()

    Login_Sql = "SELECT Password FROM user WHERE Email  = '%s' " %(log['Email'])
    Cursor.execute(Login_Sql)
    result = Cursor.fetchall()

    if result == log['Password']:
        return("Logged In")
    elif result != log['Password']:
        return("Login Failed")
    else:
        return("Invaild")

@app.route("/signup", method=['POST'])
def signup():
    new = request.json()

    New_sql = "INSERT INTO user (Name,Status,MarAcc,Password,ProPhotoPath,Personal,Email,PhoneNum) VALUES ()"

@app.route('/Rerate', method=['PATCH'])
def rerate():
    rating = request.json()
    

if __name__ == '__main__':
    app.run(debug=True)