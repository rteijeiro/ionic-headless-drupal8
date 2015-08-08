angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Articles', ['$http', '$q', function($http, $q) {
  var articles = [];

  return {
    all: function() {
      var myPromise = $q.defer();
      $http.get('http://localhost:8080/drupal/articles/rest').then(function(response) {
        myPromise.resolve(response.data);
      }, myPromise.reject);
      articles = myPromise.promise;
      return articles;
    },
    get: function(articleId) {
      var myPromise = $q.defer();
      $http.get('http://localhost:8080/drupal/node/' + articleId).then(function(response) {
        myPromise.resolve(response.data);
      }, myPromise.reject);
      return myPromise.promise;
    }
  }
}]);

