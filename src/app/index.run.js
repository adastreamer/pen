(function() {
  'use strict';

  angular
    .module('pen')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
