'use strict'

var ApplicationCtrl = function($rootScope){
  var self = {
    pesquisa: '',
    selectedPlace: null,
    placesResult: []
  }

  return self
}

ApplicationCtrl.$inject = ['$rootScope']

angular.module("encontreImoveisApp").controller("ApplicationCtrl", ApplicationCtrl)
