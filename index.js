const firebase = require("firebase-admin");
const functions = require('firebase-functions');
const firestore = require("firebase-admin").firestore;
const express = require('express');
const twilio = require('twilio');
const app = express();

var serviceAccount = require("./offline-shop-4f02a-firebase-adminsdk-ak1tp-b7077262a1.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://offline-shop-4f02a-default-rtdb.firebaseio.com"
});

const db = firebase.firestore();


const accountSid = "AC03ad19d36edfa6197c157034a26144af";
const authToken = "21a9337ed5cd5b31118fb13f0a80ffbc";
const client = require("twilio")(accountSid, authToken);

app.post('/verify-phone', (req, res) => {
        const phoneNumber = req.body.phoneNumber; 
        client.verify.services("VA2854239ce08db5715147f4a5648e1b19")
          .verifications
          .create({ to: phoneNumber, channel: 'sms' })
          .then(verification => res.send(verification.status))
          .catch(error => res.status(500).send(phoneNumber));
      });
app.post('/verify-code', (req, res) => {
       const phoneNumber = req.body.phoneNumber; // phone number in E.164 format
       const code = req.body.code;
       client.verify.services("VA2854239ce08db5715147f4a5648e1b19")
       .verificationChecks
       .create({ to: phoneNumber, code: code })
       .then(verification_check => console.log(verification_check.status))
    .catch(error => console.error(error));
    });

    app.get('/verify-phone', (req, res) => {
   res.end("Hello World");
    });

app.get('/',(req,res) => {
    res.send('Hello World');
    res.end();
});


    app.listen(3000, () => console.log('Server is running on port 3000'));







