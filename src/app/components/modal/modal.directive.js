(function () {
  'use strict';

  angular
    .module('redditSearchShare')
    .directive('modal', Modal);

  /** @ngInject */
  function Modal() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/modal/modal.html',
      scope: {
        creationDate: '='
      },
      controller: ModalCtrl,
      controllerAs: 'vm',
      bindToController: true,
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function ModalCtrl($rootScope, $scope, RedditPost) {
      var vm = this;
      vm.post;

      vm.imgURL = RedditPost.imgUrl;

      vm.setHeroCard = function () {
        var post = RedditPost.get();
        vm.post = post;
      };


    }

    function linkFunc(scope, el, attr, vm) {
      var backdrop = angular.element(".modal-backdrop");

      scope.$on('open-modal', openModal);

      scope.$on('close-modal', closeModal);

      el.on('click', function ($event) {
        if ($event.target === $event.currentTarget) {
          closeModal();
        }
      });


      function openModal() {
        el.show();
        backdrop.show();
        vm.setHeroCard();
        console.log('Modal is open ...');
      }

      function closeModal() {
        el.hide();
        backdrop.hide();
        console.log('Modal is closed ...');
      }
    }
  }

})();
