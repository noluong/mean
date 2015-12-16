angular.module('appRoutes', []).config(['$stateProvider', '$urlRouterProvider','$locationProvider',
	function($stateProvider, $urlRouterProvider,$locationProvider){
	
	/*Thiết lập các state*/
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "/views/public/home.html",
		controller: 'baseController'
	})
	.state('post', {
		url: "/post",
		templateUrl: "/views/public/post.html",
		controller: 'PostController'
	})

	 /*===============ADMIN================*/
	.state('admin-post',{
        url: '/admin/post',
        templateUrl : '/views/admin/post_list.html',
        controller :'ListPostController',
        title: 'List posts',
    })
    .state('admin-post-create',{
        url: '/admin/post/create',
        templateUrl : '/views/admin/post_edit.html',
        controller :'CreatePostController',
        title: 'Create post',
    })
    
    /*===============404 NOT FOUND================*/
    .state('404', {
    	url: '/404',
    	templateUrl: 'views/404.html',
    	title: '404 Not found',
    });

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$locationProvider.hashPrefix('!');
}]);