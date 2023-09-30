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

#New_sql = "INSERT INTO user (Name,Status,MarAcc,Password,ProPhotoPath,Personal,Email,PhoneNum) VALUES ()"
#add_sql = "Insert INTO product (Name,Rating,UserID,ImgPath,Description,NumRatings,Prodtype) Values (%s,%s,%s,%s,%s,1,%s)"
#New_sql = "INSERT INTO user (Name,Password,Email,PhoneNum) VALUES ('Ian','Passworrr','Ian@gmail.com', 9941639567)"
#add_sql = "Insert INTO product (Name,Rating,UserID,NumRatings,Prodtype) Values ('Yellow rug',6,3,1,'Rug')"
updata_sql = "UPDATE product SET ImgPath = 'https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-yellow-green__1084788_pe859872_s5.jpg?f=s' WHERE ProductID = 4"

Cursor.execute(updata_sql)
Connection.commit()