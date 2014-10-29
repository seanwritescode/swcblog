var Prismic = require('prismic.io').Prismic,
    Configuration = require('../config/prismic-configuration').Configuration;


var authentication_wrapper = function(callback) {
  Prismic.Api(Configuration.apiEndpoint, function(err, Api) {

    if(err) { onPrismicError(res, err); return; }

    var repository_context = {
      api : Api,
      linkResolver : function(doc) {
        return Configuration.linkResolver(doc);
      }
    }

    callback(repository_context);
  }, Configuration.accessToken);
};

var onPrismicError = function(res, err) {
  res.send(500, "Error 500 " + err.message);
};

exports.getDocuments = function(callback) {
  authentication_wrapper(function(context) {
    context.api.form('everything').ref(context.api.master()).query(Prismic.Predicates.at("document.type", "blog")).submit(function(err, response) {
      callback(response, err, context);
    });
  });
};
