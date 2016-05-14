var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, result) {
        if (err) {
          console.log('Error in controller messages post: ', err);
        } else {
          res.end(JSON.stringify(result));
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('>>>>> GET: post to users: ', req.body);
    },
    post: function (req, res) {
      models.users.post(req.body, function(err, result) {
        if (err) {
          console.log('****#*$# error on post controller:', err);
        } else {
          res.end(JSON.stringify(result));
        }
      });
    }
  }
};

