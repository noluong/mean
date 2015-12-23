angular.module('appRoutes', []).config(['$stateProvider', '$urlRouterProvider','$locationProvider',
	function($stateProvider, $urlRouterProvider,$locationProvider){
	/*Điều hướng 404*/
  	$urlRouterProvider.otherwise("/404.html");

	/*Thiết lập các state*/
	$stateProvider
	// home page
    .state('homepage', {
      	url: "/",
        templateUrl: 'views/home.html',
        controller: 'baseController'
    })

    // posts page that will use the PostController
    .state('post', {
      	url: "/post",
        templateUrl: 'views/admin/post_list.html',
        controller: 'ListPostController'
    })

    .state('post_create', {
      	url: "/post/create",
        templateUrl: 'views/admin/post_create.html',
        controller: 'CreatePostController'
    })

    .state('post_detail', {
      	url: "/post/detail/:id",
        templateUrl: 'views/admin/post_detail.html',
        controller: 'DetailPostController'
    })

    .state('post_edit', {
      	url: "/post/edit/:id",
        templateUrl: 'views/admin/post_edit.html',
        controller: 'DetailPostController'
    })

   	/*===============404 NOT FOUND================*/
	.state('404', {
		url: "/404.html",
		templateUrl : 'views/404.html',
      	title: '404 - Không tìm thấy trang yêu cầu'
	});

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('!');

}]);