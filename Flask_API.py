from flask import Flask
from flask import request
from flask import session
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

@app.route("/data")
def start():
    return({"Status": "Online"})


@app.route("/login", methods=['POST'])
def login():
    print("login")
    log = request.get_json()
    print(log['password'])
    Login_Sql = "SELECT UserID, Password FROM user WHERE Email  = '%s' " %(log['Email'])
    Cursor.execute(Login_Sql)
    result = Cursor.fetchall()
    for x in result:
        print(x)
    if result == []:
        print("Invaild credentials")
        return({"Status": False})
    elif result[0][1] == log['password']:
        session['UserID'] = result[0][0]
        return({"Status": True})
    elif result != log['password']:
        return({"Status":False})
    else:
        return({"Status":False})

@app.route("/signup", methods=['POST'])
def signup():
    new = request.get_json()
    New_sql = "INSERT INTO user (Name,Status,MarAcc,Password,ProPhotoPath,Personal,Email,PhoneNum) VALUES ()"


@app.route("/addproduct", methods=["POST"])
def addproduct():
    add = request.get_json()
    add_sql = "Insert INTO product (Name,Rating,UserID,ImgPath,Description,NumRatings,Prodtype) Values (%s,%s,%s,%s,%s,1,%s)"


@app.route('/get_image/<int:Product_id>')
def getImg(Product_id):
    get_sql = "SELECT Rating, ImgPath FROM product WHERE ProductID = '%s'" %(Product_id)
    Cursor.execute(get_sql)
    result = Cursor.fetchall()
    return({
        "Rating" : result[0][0],
        "ImgPath" : result[0][1],
    })


@app.route('/Rerate', methods=['PATCH'])
def rerate():
    rating = request.get_json()
    rating['ProductID']
    rerate_sql = "SELECT Rating, NumRatings FROM product WHERE ProductID = '%s'" %(rating['ProductID'])
    Cursor.execute(rerate_sql)

    Rates = Cursor.fetchall()
    Rating = int(Rates[0])
    Num = int(Rates[1])
    NewRating = int(rating['Rating'])
    UpdateRating = (Rating * Num + NewRating) / Num + 1
    Num += 1
    Update_Sql = "UPDATE product SET Rating = %s, NumRatings = %s" % (UpdateRating, Num)
    Cursor.execute(UpdateRating)
    Connection.commit()
    return({"Status" : "New Rating set"})


@app.route('/user_prod/<int:User_id>', methods = ['GET'])
def products(User_id):
    prod_Sql = "SELECT Name FROM product WHERE UserID = %s" %User_id
    Cursor.execute(prod_Sql)
    products = Cursor.fetchall()
    return(products)

if __name__ == '__main__':
    app.run(debug=True)
