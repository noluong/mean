angular.module('postService', [])
	.factory('Post', ['$http', function($http){
		return {
			//call to get all posts
			get: function(){
				return $http.get('/post');
			},
			create: function(formData) {
	            return $http.post('/post/create', formData);
	        },
			edit: function(formData){
				return $http.post('/post/edit', formData);
			},
			delete: function(id){
				return $http.delete('/post'+id);
			}
		}
	}]);