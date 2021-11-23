var express = require("express");

var app = express();
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');




  app.listen(8000, function() {
    console.log("listening on port 8000");
  })


  app.use(express.static(__dirname + "/static"));

  app.get("/cars", function (request, response){
    // hard-coded user data

    response.render('cars');
})

app.get("/cats", function (request, response){
  // hard-coded user data

  response.render('cats');
})

app.get("/salem", function (request,response){
  var food="rats"
  var name="Salem";
  var age = "2";
  var sleeping_places=["behind the tv", "cat's bed", "owners legs"];
  var image_source="images/cat1.jpg";
  response.render("details",{
      cat_name:name,
      cat_age:age,
      places:sleeping_places,
      img:image_source,
      fav_food:food
  });
})

app.get("/pussInBoots", function (request,response){
  var food="chicken"
  var name="Puss in Boots";
  var age = "3";
  var sleeping_places=["under the couch", "ceiling", "kitchen"];
  var image_source="images/cat2.jpg";
  response.render("details",{
      cat_name:name,
      cat_age:age,
      places:sleeping_places,
      img:image_source,
      fav_food:food
  });
})

app.get("/tiger", function (request,response){
  var food="human leftovers"
  var name="tiger";
  var age = "4";
  var sleeping_places=["lamps", "owners bed", "under a car"];
  var image_source="images/cat3.jpg";
  response.render("details",{
      cat_name:name,
      cat_age:age,
      places:sleeping_places,
      img:image_source,
      fav_food:food
  });
})

app.get("/cars/new", function (request, response){
  // hard-coded user data

  response.render('form');
})