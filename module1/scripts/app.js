(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = "";

        $scope.checkIfTooMuch = function () {
            if ($scope.dishes == "") {
                $scope.classGreen = false;
                $scope.classRed = true;
                $scope.message = "Please enter data first";

            } else {
                var arr = $scope.dishes.split(',');
                var count = 0;
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].trim();
                    if (arr[i] !== "") {
                        count++;
                    }
                }
                if (count <= 3) {
                    var message = "Enjoy!";
                } else {
                    message = "Too much!";
                }
                $scope.message = message;
                $scope.classRed = false;
                $scope.classGreen = true;

            }
        }
    }
})();
