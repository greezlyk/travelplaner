/* App Module */

var phonecatApp = angular.module('travelplanerApp', [
  'ngRoute'

]);

phonecatApp.controller('SearchController', ['$scope',
  function($scope) {
    $scope.search =   function(value) { 
        searchRresult = "Trave from " + $scope.personSearch.searchFromCity + ". to " + $scope.personSearch.searchToCity + " with Fjords and camping."; 
        
        
        $scope.searchRresult = searchRresult;
        return searchRresult ;
        
    };

    
  }]);
