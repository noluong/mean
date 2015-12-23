angular.module('postCtrl',[])
	.controller('ListPostController',['$scope', '$state','Post', function($scope, $state, Post) {
		$scope.tagline = 'Nothing beats a pocket protector!';

	   	Post.get().success(function(data){
	     	$scope.posts = data;
	   	});

	   	$scope.deletePost = function(id) {
	   		Post.delete(id).success(function(){
	   			$scope.success = 'Delete this post successfull';
	   			Post.get().success(function(data){
	   				$scope.posts = data;
	   			});
	   		})
	   		.error(function(){
				$scope.error = 'Delete this post error';
	   		});
	   	}
	}])
	.controller('CreatePostController',['$scope', '$state','Post', function($scope, $state, Post) {
		$scope.formData = {};
		$scope.createPost = function(){
			$scope.Process = true;
			if(!$.isEmptyObject($scope.formData)) {
				Post.create($scope.formData)
				.success(function(data) {
					$scope.formData = {};
					$scope.form_post.$setPristine();
					$scope.Process = false;
					$scope.success = 'Create post successful';
					$state.go('post');
				})
				.error(function(data) {
					$scope.error = 'Create post error';
				});
			} else {
				$scope.error = 'Please enter field require';
				$scope.Process = false;
			}
		};
	}])
	.controller('DetailPostController',['$scope', '$state', '$http', '$stateParams', 'Post',
		function($scope, $state, $http,$stateParams, Post)
		{
			Post.detail($stateParams.id).success(function(data){
				if(data.title != null) {
					$scope.post = data;
				} else {
					$state.go('404');
				}
			})
			.error(function(){
				console.log('error');
			});

			$scope.editPost = function()
	        {
	            $scope.Proccess = true;
	            if (!$.isEmptyObject($scope.post)) {
	                Post.edit($scope.post)
	                    .success(function(data)
	                    {
                            $scope.Proccess = false;
                            $scope.success = 'Edit post successful';
	                    })
	                    .error(function()
	                    {
	                        $scope.error = 'Edit post error';
	                    });
	            } else {
	                $scope.error = 'Please enter field require';
	                $scope.Proccess= false;
	            }
	        };
		}
	]);
