/**
 * Created by ErolTokalac on 05/12/15.
 */
var services = angular.module('productApp.services',[]);

services.factory('Product',function($resource){
    return $resource('http://api.test.node.i3tc.com/api/products/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});

services.factory('Comment',function($resource){
    return $resource('http://api.test.node.i3tc.com/api/comments/:id',{id:'@_id'},{
        update: {
            method: 'POST', isArray: false
        },
        save: {
            method: 'POST', isArray: false
        },
        get: {
        	method: 'GET', isArray: true
        },
        query: {
        	method: 'GET', isArray: true
        }
    });
});