const express = require('express')
const bodyParser = require("body-parser");
const app = express()


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//post numbers
app.post('/', (req, res ) => {
  //calcul new number
    let result = Object();
    if(req.body.equationtype == "+"){
      result.newNumber = req.body.number1+req.body.number2;
    }
    // return reponse after 2s
    setTimeout(function() {
      res.send(result);
    }, 2000);
});

app.listen(7000, function () {
  console.log('Example app listening on port 7000!')
})
