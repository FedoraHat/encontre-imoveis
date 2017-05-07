'use strict'
angular.module("encontreImoveisApp", ['ngSanitize', 'ngMap']).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.nestoria.com.br/**'
  ]);
})
