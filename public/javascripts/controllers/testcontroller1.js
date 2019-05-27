'use strict';

angular.module('myApp')
    .controller('test2Ctrl',['$rootScope', '$scope', '$http', '$timeout','$location',
    function($rootScope,$scope,$http,$timeout,$location,){
        console.log("test2ctrl")
    }
])