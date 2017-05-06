'use strict'
angular.module("encontreImoveisApp", ['ngSanitize']).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.nestoria.com.br/**'
  ]);
})
