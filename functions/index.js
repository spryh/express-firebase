const functions = require('firebase-functions');
const express = require('express')

const helloWorldNow = express()

helloWorldNow.get('/helloworldnow', (request, response) =>{
    var nowTime = new Date()
    response.send(`Hello from Express at ${nowTime.toLocaleString()}`);    
})

exports.helloWorldNow = functions.https.onRequest(helloWorldNow)
