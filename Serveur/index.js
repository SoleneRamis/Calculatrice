const express = require('express')
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//post numbers
app.post('/', (req, res ) => {
  //calcul new number
    let result = Object(); //{}
    result.newNumber = req.body.number1 + req.body.number2; //{ "newNumber": 12}

    //1. return reponse after 2s
    setTimeout(function() {

      res.send(result);

    }, 2000);
});

// method: {
//   getNumebr: fcuntion(){

    //let number1 =  //number des bouton
    //let number2 =  //number des bouton
    // this.senfCalcul(number1, number2).
// },
  // senfCalcul: function(num1, num2 ){
    // axios.post('http://localhost:7000/', {
    //     number1: valuereturnedbyclient,
    //     number2: valuereturnedbyclient
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //      afficher result with vue
            //this.equation: response
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     { error_message }’
    //  });
  // }
//}


//1'. Stocker
// app.post('/', (req, res ) => {
//   //calcul new number
//     let result = Object(); //{}
//     result.newNumber = req.body.number1 + req.body.number2; //{ "newNumber": 12}
//
//     //save in bdd NoSQL ex: MongoDB data.json { "newNumber": 12}
//     res.send(result);
//
// });

// app.get('/', function (req, res) {
    // 1': Bdd: request bdd data.json
    // let data = data.json
//   res.send(data)
// })

app.listen(7000, function () {
  console.log('Example app listening on port 7000!')
})
