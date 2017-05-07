'use strict'
var selectedPlace = {
  templateUrl: 'templates/selected-place.html',
  bindings: {
    ref: '=',
  }
}

angular.module('encontreImoveisApp').component('selectedPlace', selectedPlace)
