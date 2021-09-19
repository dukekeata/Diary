//shint esversion:6


const express =require("express");
const bodyParser =require("body-parser");
const date = require (__dirname + "/date.js");



const app = express();

let items = ["Buy food", "Cook food",  "Eat food" ];
let workItems= [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));   //helps to apply files in the public folder

app.get("/", function(req, res){


  let day =date.getDate();

res.render("lists", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

  let item = req.body.newItem;

  if (req.body.lists === "Work"){
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/");
  }
  items.push(item);
  res.redirect("/");

});

app.get("/work", function (req,res){
res.render("lists", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
res.render("about");
});

app.post("/work"), function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
}



app.listen(3000, function(){
console.log("Server started at port 3000")
});