var db = require('../db');

module.exports = {
  messages: {
    get: function (data) {
    }, // a function which produces all the messages
    post: function (data, callback) {
      var queryString = '';
      db.query(queryString, function(err, result) {
        if (err) {
          console.log('Error in models messages post: ', err);
        } else {
          callback(err, result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (data) {
      
    },
    post: function (data, callback) {
      console.log('>>>>>>>>>>> data: ', data);
      var queryString = 'INSERT INTO users (username) VALUES("' + data.username + '");';
      db.query(queryString, function(err, result) {
        console.log('err = ', err);
        console.log('result = ', result);
        if (err) {
          console.log(err);
        } else {
          callback(err, result);
        }
      });
    }
  }
};

