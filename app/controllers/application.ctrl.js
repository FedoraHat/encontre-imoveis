'use strict'

var ApplicationCtrl = function($rootScope){
  var self = {
    pesquisa: '',
    selectedPlace: null,
    placesResult: [],
    loading: false,
  }

  return self
}

ApplicationCtrl.$inject = ['$rootScope']

angular.module("encontreImoveisApp").controller("ApplicationCtrl", ApplicationCtrl)
