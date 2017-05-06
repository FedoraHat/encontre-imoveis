'use strict'

var ApplicationCtrl = function($rootScope){
  var self = {
    pesquisa: '',
    placesResult: []
  }

  return self
}

ApplicationCtrl.$inject = ['$rootScope']

angular.module("encontreImoveisApp").controller("ApplicationCtrl", ApplicationCtrl)
