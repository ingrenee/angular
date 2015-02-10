function myController($scope){
    $scope.mensaje = "Mi primer mensaje con Angularjs";
    $scope.saludo = function(){
       alert("hola");
    }
}