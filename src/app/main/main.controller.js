(function () {
  'use strict';

  angular
    .module('redditSearchShare')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $scope, Reddit, RedditPost) {
    var vm = this;

    $scope.search_category = 'funny';

    //Call Api when category changed
    $scope.$watch('search_category', function (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        vm.posts = Reddit.getPosts(newValue);
      }
    });

    vm.posts = Reddit.getPosts();

    vm.imgURL = RedditPost.imgUrl;

    vm.popModal = function (post) {
      RedditPost.set(post);
      $rootScope.$broadcast('open-modal');
    };
  }
})();


