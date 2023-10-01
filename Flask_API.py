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
    session['UserID'] = 0
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
    print(add)
    add_sql = "Insert INTO product (Name,UserID,ImgPath,Rating,NumRatings,Prodtype) Values ('%s',%s,'%s',0,0,'%s')"\
        %(add['name'],session['UserID'],add['img'],add['category'])
    print(add_sql)
    Cursor.execute(add_sql)
    Connection.commit()
    return({"Status" : True})

@app.route('/get_image/<int:Product_id>')
def getImg(Product_id):
    get_sql = "SELECT Name, ImgPath FROM product WHERE ProductID = '%s'" %(Product_id)
    Cursor.execute(get_sql)
    result = Cursor.fetchall()
    return({
        "Name" : result[0][0],
        "ImgPath" : result[0][1],
    })


@app.route('/Rerate', methods=['POST'])
def rerate():
    rating = request.get_json()
    print(rating)
    rerate_sql = "SELECT Rating, NumRatings FROM product WHERE ProductID = '%s'" %(rating['ID'])
    Cursor.execute(rerate_sql)
    Rates = Cursor.fetchall()
    Rating = int(Rates[0][0])
    Num = int(Rates[0][1])
    NewRating = int(rating['rating'])
    UpdateRating = (Rating * Num + NewRating) / (Num + 1)
    Num += 1
    print("New Rating: ",UpdateRating)
    Update_Sql = "UPDATE product SET Rating = %s, NumRatings = %s WHERE ProductID = %s" % (UpdateRating, Num,rating['ID'])
    Cursor.execute(Update_Sql)
    Connection.commit()
    return({"Status" : True})


@app.route('/user_prod/<int:User_id>', methods = ['GET'])
def products(User_id):
    prod_Sql = "SELECT Name FROM product WHERE UserID = %s" %User_id
    Cursor.execute(prod_Sql)
    products = Cursor.fetchall()
    return(products)

@app.route('/render',methods = ['GET'])
def render():
    get_sql = "SELECT ProductID, ImgPath, Name FROM product WHERE NumRatings = (SELECT MIN(NumRatings) FROM product)"
    Cursor.execute(get_sql)
    result = Cursor.fetchall()
    print(result[0][0])
    return({"ID" : result[0][0],
            "Img":result[0][1],
            "Name":result[0][2]
            })

if __name__ == '__main__':
    app.run(debug=True)
