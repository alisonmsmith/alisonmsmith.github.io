'use strict';


// Declare app level module which depends on filters, and services
angular.module('portfolio', [
  'ngRoute',
  'portfolio.filters',
  'portfolio.services',
  'portfolio.directives',
  'portfolio.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/samples', {templateUrl: 'js/views/samples.html', controller: 'samples'});
  $routeProvider.when('/resume', {templateUrl: 'js/views/resume.html', controller: 'resume'});
  $routeProvider.when('/publications', {templateUrl: 'js/views/publications.html', controller: 'publications'});
  $routeProvider.when('/about', {templateUrl: 'js/views/about.html', controller: 'about'});
  $routeProvider.otherwise({redirectTo: '/samples'});
}]);
