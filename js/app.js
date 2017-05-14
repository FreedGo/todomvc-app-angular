(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
    var app = angular.module('todosapp', []);
    app.controller('todosConttoller',['$scope','$log',function ($scope,$log) {
        // 1.初始任务
		$scope.todos=[
            {id:1,title:'吃饭',completed:true},
            {id:2,title:'睡觉',completed:true},
            {id:3,title:'打豆豆',completed:true},
            {id:4,title:'看豆豆被打',completed:true},
            // {id:5,title:'豆豆去华山',completed:true},
            {id:6,title:'练成葵花宝典',completed:false}
		];
		// 2.新增任务
        $scope.newTodo = '';
        $scope.add = function () {
            if (!$scope.newTodo){
                return
            }
            $scope.todos.push({
                id:Math.random(),
                title:$scope.newTodo,
                completed:false
            });
            $scope.newTodo = '';
        }
    }])


})(angular);
