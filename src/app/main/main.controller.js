(function() {
  'use strict';

  angular
    .module('pen')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;
    var pinOffset = 7;
    vm.username = '@adastreamer';

    vm.pins = [];

    vm.addPin = function(event){
      var bounds = event.target.getBoundingClientRect();
      var x = event.clientX - bounds.left - pinOffset;
      var y = event.clientY - bounds.top - pinOffset;

      var pin = {
        x: x,
        y: y
      };

      vm.pins.push(pin);
      vm.selectPin(pin);
    };

    vm.clearSelectedPin = function(){
      vm.selectedPin = null;
    };

    vm.selectPin = function(pin){
      vm.selectedPin = pin;
    };
  }
})();
