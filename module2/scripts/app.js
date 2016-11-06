(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;
        toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
        toBuyList.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var toBuyItems = [
            {
                name: 'milk',
                quantity: '5 bottles'
            },
            {
                name: 'oranges',
                quantity: '3 bags'
            },
            {
                name: 'apples',
                quantity: '6 bags'
            },
            {
                name: 'tomatoes',
                quantity: '5 bags'
            },
            {
                name: 'meet',
                quantity: '2 bags'
            }
        ];
        
        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };
        service.removeItem = function (itemIndex) {
            var targetItem = toBuyItems[itemIndex];
            boughtItems.push(targetItem);
            toBuyItems.splice(itemIndex, 1);
        };
    }
})();
