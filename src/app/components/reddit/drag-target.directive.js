(function() {
  'use strict';

  angular
    .module('redditSearchShare')
    .directive('dragTarget', dragTarget);

  /** @ngInject */
  function dragTarget() {
    var directive = {
      restrict: 'AE',
      scope:{
        data:"=dragTarget"
      },
      controller: DragTargetCtrl,
      controllerAs: 'vm',
      bindToController: true,
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function DragTargetCtrl() {
      var vm = this;

    }

    function linkFunc(scope, elem, attr, vm){

      elem.on('dragstart', dragHandler);

      function dragHandler(){
        console.log("Start dragging");
      }
    }
  }

})();
