var mysql = require('mysql');
const express = require("express");
const app =  express();
const path = require('path');
var con = mysql.createConnection({
  host: "localhost",
  user: "dbadmin",
  password: "123TnT456789!?",
  database: "spadatabase"
});
var name_product = "";
var price_product = "";
var arr = [];
var prr = [];
var size = 0;
con.connect(function(err) {
        if (err) throw err;
        // con.query("select * from cpu where id=1", function (err, result) {
        con.query("select * from cpu", function (err, result) {
        if (err){
                console.log(err);
        }
        else{
                //con.query("selcount(title) from  cpu",function (err, res) {
                        //if(err){
                                //console.log(err);
                //      }else{
                //              row = res;
                //      }
        //      });
               var data = JSON.parse(JSON.stringify(result));
                var i = 0;
                size = data.length;
                while(i < size){
                        name_product = data[i].title;
                        price_product = data[i].price;
                        arr.push(name_product);
                        prr.push(price_product);
                        //push(price_product);
                        console.log(name_product);
                        i++;
                }
                //name_product = data.title;name_product = data.title;
                //console.log(name_product);
                //console.log(price_product);
        }
 });
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.get("/", (req, res) => {
//      var i = 0;
//      while(i < 2){
                var title_product = [];
                var i = 0;
                while(i < size){
                        title_product[i] = arr[i] + " : price " + prr[i] + "$";
                        i++;
                }
                //res.status(200).send(name_product);
                var sum = title_product;
                res.render("index",{sum,sum});
//              i++;
//      }
});

app.listen(3001, () => {
        console.log(name_product);
});