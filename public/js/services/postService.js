angular.module('postService', [])
.factory('Post',['$http', function($http) {
    return {
        get : function(){
            return $http.get('/post');
        },
        create : function(formData) {
            return $http.post('/post/create', formData);
        },
        detail : function(id){
            return $http.get('/post/detail/'+id);
        },
        delete : function(id){
            return $http.delete('/post/delete/'+id);
        },
        edit : function(formData) {
            return $http.put('/post/edit', formData);
        }
    };
}]);
