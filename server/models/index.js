var db = require('../db');

module.exports = {
  messages: {
    get: function (data, callback) {
      var queryArgs = [];
      var queryString = "SELECT * FROM messages";
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error, could not retrieve messages: ', err);
        } else {
          callback(err, results);
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      var queryArgs = [data.message, data.username, data.roomname];
      var queryString = "INSERT INTO messages (text, user_id, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)";
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error, could not store message: ', err);
        } else {
          callback(err, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      var queryArgs = [];
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error, could not retrieve users: ', err);
        } else {
          callback(err, results);
        }
      });
    },
    post: function (data, callback) {
      var queryArgs = [data.username];
      var queryString = 'INSERT INTO users (username) VALUES(?);';
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Error, could not store user: ', err);
        } else {
          callback(err, results);
        }
      });
    }
  }
};

