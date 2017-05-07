'use strict'

var searchBarCtrl = function(Nestoria){

  // @doc: Requisitando Locais
  self.getPlaces = function(){
    if(self.ref.selectedPlace){
      self.ref.selectedPlace = null
    }
    if(self.ref.pesquisa.length > 5 && !self.ref.loading){
      self.ref.loading = true
      Nestoria.getPlaces(self.ref.pesquisa, function(response){
        // retornando para o escopo de aplicação
        self.ref.placesResult = response.data.response.listings
        self.ref.loading = false
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
