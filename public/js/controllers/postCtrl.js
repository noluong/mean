angular.module('postCtrl', [])
	.controller('PostController',['$scope', '$state','Post', function($scope, $state, Post) {
		// Post.get().success(function(data){
		// 	$scope.tagline = "List posts";
		// 	// $scope.posts = data;
		// 	$scope.posts = [ { id:"2013-01-08T00:00:00", name:'Joe'},
  //                { id:"2013-01-09T00:00:00", name:'Sue'}];
		// });
	}])

	.controller('ListPostController', ['$scope', '$state', 'Post', function($scope, $state, Post) {
		
	}])

	.controller('CreatePostController', ['$scope', '$state', 'Post', function($scope, $state, Post) {
		
	}])

