console.log("inside server.js file");
//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const createError = require('http-errors')
const router = express.Router();
var cors = require('cors')
var jsonParser = bodyParser.json()


// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/e-comm'));
app.use(cors())
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
console.log("app root path: ", __dirname);

// app.get('/*', function (req, res) {
//
//     res.sendFile(path.join(__dirname + '/dist/e-comm/index.html'));
// });

app.post('/users/auth', jsonParser, function (req, res) {
  data = req.body
  console.log('Got body:', req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (data.username == 'canberk' && data.password == '1234567') {
    res.send([{
      id: 1,
      username: 'canberk',
      password: 'test',
      firstName: 'Test',
      lastName: 'User',
      email: 'canberkatbinici@gmail.com'
    }])
    // res.send('welcome, ' + req.body.username)
  } else if (data.username == 'ca' && data.password == '1234567') {
    res.send([{

      id: 1,
      firstName: 'canberk',
      lastName: 'atbinici',
      email: 'canberkatbinici@gmail.com',
      username: 'ca',
      number: '123456789',
      gender: 'male',
      token: "token",
      address: [{
        name: "Adress 1",
        firstname: "canberk",
        surname: "atbinici",
        country: "Türkiye",
        city: "Antalya",
        addressLine: "3730 sokak no 9 daire 4",
        phone: "5435125437",
        zipCode: "07220",
        additional: "marketin yanı "
      },
        {
          name: "Adress 2",
          firstname: "canberk",
          surname: "atbinici",
          country: "Türkiye",
          city: "Antalya",
          addressLine: "3730 sokak no 9 daire 4",
          phone: "5435125437",
          zipCode: "07220",
          additional: "marketin yanı "
        }]
    }])
  } else throw createError(400, 'User ' + req.body.username + ' not found')  // res.error()


});


// app.post('/saveCart', function (req, res) {
//   console.log('Got body:', req.body);
//
//
// })

app.post('/saveCart', jsonParser,function(req,res,err){
  res.set('Content-Type', 'application/json');
  var jsonData = JSON.stringify(req.body);
  res.status(201);
  res.json();
  console.log('saveCart body :', req.body);

},(err => console.log("errror message : " + err)));

app.get('/user', function (req, res,body) {
  console.log("hello wold")
  res.send({

    id: 1,
    firstName: 'canberk',
    lastName: 'atbinici',
    email: 'canberkatbinici@gmail.com',
    username: 'ca',
    number: '123456789',
    gender: 'male',
    token: "token",
    address: [{
      id: 1,
      name: "Adress 1",
      firstname: "canberk",
      surname: "atbinici",
      country: "Türkiye",
      city: "Antalya",
      addressLine: "3730 sokak no 9 daire 4",
      phone: "5435125437",
      zipCode: "07220",
      additional: "marketin yanı "
    },
      {
        id: 2,
        name: "Adress 2",
        firstname: "canberk",
        surname: "atbinici",
        country: "Türkiye",
        city: "Antalya",
        addressLine: "3730 sokak no 9 daire 4",
        phone: "5435125437",
        zipCode: "07220",
        additional: "marketin yanı "
      }]
  })
})
// app.get('/users/auth', function (req, res) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //   res.send("[{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' ,email: 'canberkatbinici@gmail.com'}]")
// // });


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log("Server started");
})
