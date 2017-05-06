'use strict'

var place = {
  templateUrl: 'templates/place.html',
  bindings: {
    ref: '=',
    model: '='
  }
}

angular.module('encontreImoveisApp').component('place', place)
