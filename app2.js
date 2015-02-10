var app=angular.module("app",[]);


app.config(function ($routeProvider){
	
	
	
	
	$routeProvider.when("/",
	{templateUrl:"p1.html"}
	).when("/add",
	{templateUrl:"p2.html"}
	).otherwise({ redirectTo : "/"})
	
	
	
	
	
	
	});