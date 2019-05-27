'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myApp2',
    'flowapp'
]);
var app2 = angular.module('myApp2', []);

var flowapp = angular.module('flowapp',[
    'ngRoute',
    'ngAnimate',
]);

app
    .config(['$routeProvider',function($routeProvider){

        $routeProvider
            .when('/apptest1',{
                templateUrl:'../templates/apptest1.html',
                controller:'apptest1ctrl'
            }).
            when('/apptest2',{
                templateUrl:'../templates/test1.html',
                controller:'test2Ctrl'
            }).
            otherwise('/');
        console.log('log app')
    }])

app.controller('apptest1ctrl',['$rootScope', '$scope', '$http', '$timeout','$location',
    function($rootScope,$scope,$http,$timeout,$location){
        console.log("apptest1ctrl")
    }
])


flowapp
    .config(['$routeProvider',function($routeProvider){

        $routeProvider
            .when('/test1',{
                templateUrl:'/templates/test2.html',
                controller:'test1Ctrl'
            })
        
        console.log('log flowapp')
    }])



flowapp.controller('test1Ctrl',['$rootScope', '$scope', '$http', '$timeout','$location',
    function($rootScope,$scope,$http,$timeout,$location){
        console.log("test1Ctrl")
    }
])



angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('myApp2'),['myApp2']);
    angular.bootstrap(document.getElementById('flowapp'),['flowapp']);
});