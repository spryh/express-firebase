const functions = require('firebase-functions');
const express = require('express')

const helloWorld = express()

helloWorld.get('/helloworld', (request, response) =>{
    response.send("Hello from Firebase!");    
})

exports.helloWorld = functions.https.onRequest((helloWorld) => {
});
