// enviroment variable package
const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// CORS for using 8080 with 8081
const cors = require('cors')
// to use fetch in the server side
const fetch = require('node-fetch')
// to pass the validation values to meaningCloud
const FormData = require('form-data');
// to ckeck if the input text is url
const valURL = require('valid-url')

// initiating express
const app = express()

// initiating dotenv
dotenv.config();

// using static on the dist folder [production build]
app.use(express.static('dist'))

// using express json for post requests
app.use(express.json())

// using cors
app.use(cors())

console.log(__dirname)

// get request on root [runnig the prod build on root]
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// post request on postText route
app.post('/postText', (req,res)=>{

    // deconstructing the request
    let {text} = req.body;

    // check if request works
    console.log(text)

    // using formdata to pass credentials to API
    const formdata = new FormData();
        formdata.append("key", process.env.API_key);
        formdata.append("txt", text);
        formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    // the options fot fetch request
    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    if (valURL.isUri(text)){ // checking if the input calue is url
        // sending error to frontend
        res.status(422).send({"error": "url is not allowed"})
    }else{
        // fetching data
    const response = fetch(`https://api.meaningcloud.com/sentiment-2.1`, requestOptions)
      .then(response =>  response.json() ) // turning response data to json and returning it as a promise
      .then((data) => {
        //   logging fata status and sending data to frontend
          console.log(data.status)
          res.send(data)
        })
      .catch(error => res.send(error)); // checking for errors and sending them
    }
})

app.get('/postText', function (req, res) {
    res.send(mockAPIResponse)
})
