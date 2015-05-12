/**
 * Created by ErolTokalac on 05/12/15.
 */
angular.module('productApp.controllers',[]).controller('ProductListController',function($scope,$state,popupService,$window,Product){

    $scope.products=Product.query();

    console.log($scope.products);

    $scope.deleteProduct=function(product){
        if(popupService.showPopup('Really delete this?')){
            product.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('ProductViewController',function($scope,$stateParams,popupService,$window,Product,Comment){

    $scope.product = Product.get({id:$stateParams.id});
    
    $scope.items = Comment.get({id:$stateParams.id});
	
	$scope.comment=new Comment();
	
    $scope.addComment=function(product){
    	$scope.comment.id = $stateParams.id;          
    	$scope.comment.$update({id:$stateParams.id}, function(){
        	//$state.go("viewProduct");
        	//$window.location.href='';
        	$scope.loadComment=function(){
    			$scope.items=Comment.get({id:$stateParams.id});
    			$scope.product = Product.get({id:$stateParams.id});
			};
			$scope.loadComment();
			//$window.location.href='';
    	});
    }
}).controller('ProductCreateController',function($scope,$state,$stateParams,Product){

    $scope.product=new Product();

    $scope.addProduct=function(){
        $scope.product.$save(function(){
            $state.go('products');
        });
    }

}).controller('ProductEditController',function($scope,$state,$stateParams,Product){

    $scope.updateProduct=function(){
        $scope.product.$update(function(){
            $state.go('products');
        });
    };

    $scope.loadProduct=function(){
        $scope.product=Product.get({id:$stateParams.id});
    };

    $scope.loadProduct();
});
