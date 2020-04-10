var admin = require('firebase-admin');
var serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<PROJECT_ID>.firebaseio.com'
});

// The topic name can be optionally prefixed with "/topics/".
var topic = 'exemplo';

var message = {
  data: {
    data1: '1',
    data2: '2'
  },
  notification: {title: 'Título', body: 'Corpo'},
  topic: topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });