var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(null, function(err, results) {
        if (err) {
          console.log('Error in Controller messages get: ', err);
        } else {
          res.end(JSON.stringify(results));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, results) {
        if (err) {
          console.log('Error in controller messages post: ', err);
        } else {
          res.sendStatus(201);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('>>>>> GET: post to users: ', req.body);
      models.users.get(req.body, function(err, results) {
        if (err) {
          console.log('Error on Controller users get: ', err);
        } else {
          res.end(JSON.stringify(results));
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(err, results) {
        if (err) {
          console.log('Error on post controller:', err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  }
};

