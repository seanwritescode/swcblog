var prismic = require('../helpers/prismic-helper');

exports.render = function(req, res, err) {
  prismic.getDocuments(function(response, err, context) {
     res.render('index', {
       posts : response.results,
       context : context
     });
  });
};
