(function () {
  'use strict';

  angular
    .module('redditSearchShare')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
