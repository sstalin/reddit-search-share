(function() {
  'use strict';

  angular
    .module('redditSearchShare')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
