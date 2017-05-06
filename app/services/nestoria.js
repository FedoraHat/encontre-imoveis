'use strict'

var Nestoria = function($http){
  var self = {}

  var baseuri = "https://api.nestoria.com.br/api"

  self.getPlaces = function(searchText, callback, err){
    $http({
      url: baseuri,
      method: 'jsonp',
      params: {
        country: 'br',
        pretty: '1',
        encoding: 'json',
        listing_type: 'rent',
        action: 'search_listings',
        place_name: searchText
      }
    }).then(callback, err)
  }

  return self
}

Nestoria.$inject = ['$http']

angular.module('encontreImoveisApp').factory('Nestoria', Nestoria)
