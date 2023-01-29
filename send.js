const admin = require('firebase-admin');
const serviceAccount = require('./offline-shop-4f02a-firebase-adminsdk-ak1tp-b7077262a1.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://offline-shop-4f02a.firebaseio.com"
});
const phoneNumber = "+201275817179";


// admin.auth().createUser({
//   phoneNumber: phoneNumber
// })
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully created new user:", userRecord.uid);
//   })
//   .catch(function(error) {
//     console.log("Error creating new user:", error);
//   });



// admin.auth().getUserByPhoneNumber(phoneNumber)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });
  //send phone verification to user by admin
  

// admin.auth().createUserWithPhoneNumber(phoneNumber)
// .then((confirmationResult) => {
//   // SMS sent. Send confirmationResult to client
//   res.status(200).send({ confirmationResult });
// })
// .catch((error) => {
//   console.error("Error: SMS not sent.", error);
//   res.status(500).send({ error });
// });

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.post('/send_verification_code', (req, res) => {
//   const phoneNumber = req.body.phoneNumber;
//   admin.auth().createUserWithPhoneNumber(phoneNumber)
//     .then((confirmationResult) => {
//       // SMS sent. Send confirmationResult to client
//       res.status(200).send({ confirmationResult });
//     })
//     .catch((error) => {
//       console.error("Error: SMS not sent.", error);
//       res.status(500).send({ error });
//     });
// });

// app.post('/verify_code', (req, res) => {
//   const confirmationResult = req.body.confirmationResult;
//   const verificationCode = req.body.verificationCode;
//   confirmationResult.confirm(verificationCode)
//     .then((result) => {
//       // User is now signed in.
//       console.log("User is now signed in.");
//       res.status(200).send({ message: 'verification code is correct' });
//     })
//     .catch((error) => {
//       console.error("Error: invalid verification code.", error);
//       res.status(500).send({ error });
//     });
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });





    var params = {
        Message: 'a7a',
        PhoneNumber: '+201275817179',
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue':' req.query.subject'
            }
        }
    };

    require('dotenv').config('egypt');

var AWS = require('aws-sdk');
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    publishTextPromise.then(
        function (data) {
            console.log(JSON.stringify({ MessageID: data.MessageId }));
        }).catch(
            function (err) {
              console.log(JSON.stringify({ Error: err }));
            });















// admin.auth().createUserWithPhoneNumber(phoneNumber)
//   .then((confirmationResult) => {
//     let verificationCode = prompt('Please enter the verification code that was sent to your mobile device.', '');
//     return confirmationResult.confirm(verificationCode);
//   })
//   .then((result) => {
//     console.log("User is now signed in.");
//   })
//   .catch((error) => {
//     console.error("Error: SMS not sent.", error);
//   });


// admin.auth().createUserWithPhoneNumber(phoneNumber, appVerifier)
//   .then((confirmationResult) => {
//     // SMS sent. Prompt user to type the code from the message, then sign the
//     // user in with confirmationResult.confirm(code).
//     let verificationCode = prompt('Please enter the verification code that was sent to your mobile device.', '');
//     return confirmationResult.confirm(verificationCode);
//   })
//   .then((result) => {
//     // User is now signed in.
//     console.log("User is now signed in.");
//   })
//   .catch((error) => {
//     // Error; SMS not sent
//     console.error("Error: SMS not sent.", error);
//   });




// const axios = require('axios');

// async function verifyPhoneNumber(phoneNumber) {
//   try {
//     // Replace YOUR_API_KEY with your actual API key
//     const response = await axios.post('https://www.gstatic.com/firebasejs/8.0/firebase.js', {
//       phoneNumber: phoneNumber,
//     }, {
//       headers: {
//         'Content-Type': './json.json',
//         'Authorization': `Bearer AIzaSyDKmIy81QDyPOs6li8EN6JLaCXjkiafcXc`
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(verifyPhoneNumber("+201275817179"));



// const functions = require('firebase-functions');
// const { google } = require('googleapis');
// const {SMS} = require(' ');


// // Your Google Cloud project ID
// const projectId = 'offline-shop-4f02a';

// // Create a new client for the SMS API
// const smsClient = new SMS({
//   version: 'v1',
//   auth: new google.auth.GoogleAuth({
//     projectId,
//     credentials: {
//       client_email: 'https://console.cloud.google.com/iam-admin/serviceaccounts/details/116515597376346115126?project=offline-shop-4f02a',
//       private_key: '66109150e68079f24fa8115713567e94244f4c6cb7077262a1ef567943f57fca8269be317f7f037e'
//     }
//   })
// });

// // Send an SMS message to the provided phone number
// exports.sendSMS = functions.https.onRequest((req, res) => {
//   const phoneNumber = req.query.to || req.body.to;
//   const verificationCode = Math.floor(1000 + Math.random() * 9000); // Generate a random verification code
  
//   if (!phoneNumber) {
//     res.status(400).send({ error: 'Phone number is required' });
//     return;
//   }

//   // Send the SMS message
//   smsClient.projects.messages.sendSms({
//     parent: `projects/${projectId}`,
//     phoneNumber,
//     message: `Your verification code is ${verificationCode}`
//   }, (err, response) => {
//     if (err) {
//       res.status(500).send({ error: 'Failed to send SMS' });
//       return;
//     }
//     // Save the verification code to your database for later verification
//     // ...
//     res.send({ message: 'SMS sent successfully' });
//   });
// });

// // Verify the provided code against the stored code
// exports.verifyCode = functions.https.onRequest((req, res) => {
//   const phoneNumber = req.query.to || req.body.to;
//   const providedCode = req.query.code || req.body.code;

//   // Look up the stored code in your database
//   // const storedCode = ...
//   // if (providedCode !== storedCode) {
//   //   res.status(401).send({ error: 'Invalid verification code' });
//   //   return;
//   // }
//   // Mark the phone number as verified in your database
//   // ...
//   res.send({ message: 'Verification successful' });
// });
