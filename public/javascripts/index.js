var app = angular.module('myApp', []);
var app2 = angular.module('myApp2', []);

var flowapp = angular.module('flowapp',[
    'ngRoute',
]);


flowapp
    .config(['$provide','$routeProvider',function($provide,$routeProvider){

        $routeProvider
            .when('/test1',{
                templateUrl:'/templates/test1.html',
                controller:'test1ctrl'
            })
        
        console.log('log flowapp')
    }])

flowapp.controller('test1Ctrl',['$rootScope', '$scope', '$translate', '$http', '$timeout','$location', '$modal',
    function($rootScope,$scope,$translate,$http,$timeout,$location,$modal){
        console.log("test1ctrl")
    }
])

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('myApp2'),['myApp2']);
    angular.bootstrap(document.getElementById('flowapp'),['flowapp']);
});