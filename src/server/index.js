const dotenv = require('dotenv')
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const fetch = require('node-fetch')
var FormData = require('form-data');
dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())

console.log(__dirname)
const key = process.env.API_key;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
app.post('/test', (req,res)=>{
    console.log(req.body.text, process.env.API_key)
    const formdata = new FormData();
        formdata.append("key", process.env.API_key);
        formdata.append("txt", req.body.text);
        formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };


    const response = fetch(`https://api.meaningcloud.com/sentiment-2.1`, requestOptions)
      .then(response =>  response.json() )
      .then((data) => {
          console.log(data.status)
          res.send(data)
        })
      .catch(error => console.log('error', error));
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
