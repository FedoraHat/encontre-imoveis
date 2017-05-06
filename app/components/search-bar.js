'use strict'

var searchBarCtrl = function(Nestoria){

  // @doc: Requisitando Locais
  self.getPlaces = function(){
    if(self.ref.pesquisa.length > 5){
      Nestoria.getPlaces(self.ref.pesquisa, function(response){
        // retornando para o escopo de aplicação
        self.ref.placesResult = response.data.response.listings
        console.log(self.ref.placesResult)
      }, function(err){
        console.log(err)
      })
    }
  }

  return self
}

searchBarCtrl.$inject = ['Nestoria']

var searchBar = {
  controller: searchBarCtrl,
  templateUrl: 'templates/search-bar.html',
  bindings: {
    ref: '='
  }
}

angular.module('encontreImoveisApp').component('searchBar', searchBar)
