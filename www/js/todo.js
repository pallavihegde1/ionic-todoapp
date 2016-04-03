var app = angular.module('todo',[]);

 app.controller('Todoctrl',['$scope','$http','$ionicPopup','$ionicListDelegate',function ($scope,$http,$ionicPopup,$ionicListDelegate){
    $http.get('js/tasks.json').success(function(data) {
$scope.tasks = data;
        });

    $scope.addtask = function()
    {
    	$ionicPopup.prompt({
    		title: "New task",
    		template: "enter task",
    		inputPlaceholder: "what are you planning for now?",
    		okText: "create task"
    	}).then(function(res){
           if(res) $scope.tasks.push({name:res,completed:false});
    	})
};

$scope.edit= function(task)
{
      $scope.data = { response: task.name};
      $ionicPopup.prompt({
      	title: "Edit Task",
      	scope: $scope
      }).then(function(res){
      	if (res !== undefined) task.name =$scope.data.response;
      	$ionicListDelegate.closeOptionButtons()
         
      })

};

      }]);
