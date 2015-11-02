(function() {
  'use strict';

  angular
    .module('redditSearchShare')
    .directive('dropTarget', dropTarget);

  /** @ngInject */
  function dropTarget() {
    var directive = {
      restrict: 'AE',
      scope:{},
      controller: DropTargetCtrl,
      controllerAs: 'vm',
      bindToController: true,
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function DropTargetCtrl($scope, RedditPost) {
      var vm = this;
    }

    function linkFunc(scope, elem, attr, vm){

        elem.on('dragover', function($event){
           if(attr['dropTarget'] == 'mail'){
             window.location.href = "mailto:user@example.com?subject=Reddit";
           }

          if(attr['dropTarget'] == 'reddit'){
            window.location.href = "https://www.reddit.com"
          }
        });
    }
  }

})();
