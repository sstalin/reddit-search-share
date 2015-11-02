(function () {
  'use strict';

  angular
    .module('redditSearchShare')
    .service('Loader', Loader);

  /** @ngInject */
  function Loader() {
    this.on = show;
    this.off = hide;

    var loader = angular.element('#loadingDim');

    function show() {
      loader.show();
    }

    function hide() {
      loader.hide();
    }
  }

})();
