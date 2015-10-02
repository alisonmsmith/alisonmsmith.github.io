'use strict';

/* Controllers */

angular.module('portfolio.controllers', []).
  controller('samples', [function() {
  	$('#all').addClass('current-li');
 
    $("nav > ul > li").click(function(){
        show(this.id);
    });

  	function show (category) {
  		scaleDown();

		$('.' + category).removeClass('not-current');
	    $('.' + category).addClass('current');
	 
	    if (category == "all") {
	        $('nav > ul > li').removeClass('current-li');
	        $('#all').addClass('current-li');
	        $('.work > figure').removeClass('current, not-current');
	    }
  	}

  	function scaleDown () {
  		$('.work > figure').removeClass('current').addClass('not-current');
    	$('nav > ul > li').removeClass('current-li');
  	}
  	
  }])
  .controller('publications', [function() {

  }])
  .controller('about', [function() {

  }])
  .controller('resume', [function() {

  }])
  .controller('main', [function() {

  /*	$scope.selectSamples = function () {
  		deselectAll();
  		$scope.sampleSelected = "selected";
  	}

  	$scope.selectResume = function () {
  		deselectAll();
  		$scope.resumeSelected = "selected";
  	}

  	$scope.selectPublications = function () {
  		deselectAll();
  		$scope.publicationSelected = "selected";
  	}

  	function deselectAll() {
  		$scope.sampleSelected = "";
  		$scope.resumeSelected = "";
  		$scope.publicationSelected = "";
  	} */
  }]);