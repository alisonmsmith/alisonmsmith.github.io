define([ 'angular', 'angular-resource', 'angular-route' ], function(angular) {
	var cake = angular.module('cake', [ 'ngResource', 'ngRoute' ]);
	cake.directive('ngBindHtmlUnsafe', [ function() {
		return function(scope, element, attr) {
			element.addClass('ng-binding').data('$binding',
					attr.ngBindHtmlUnsafe);
			scope.$watch(attr.ngBindHtmlUnsafe,
					function ngBindHtmlUnsafeWatchAction(value) {
						element.html(value || '');
					});
		};
	} ]);
	return cake;
});