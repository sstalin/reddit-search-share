(function() {
  'use strict';

  angular
    .module('redditSearchShare')
    .service('Reddit', Reddit);

  /** @ngInject */
  function Reddit($http, Loader) {
    this.getPosts = getPosts;

    function getPosts(category) {
      var category = category || 'funny';
      var posts = [];

      Loader.on();
      $http({method:'GET', url: "https://www.reddit.com/r/"+ category + "/.json"}).then(function(response){
        var children;
        if(response.status == 200){
          children = response.data.data.children;
          if (children.length > 0){
            for (var i in children){
              posts.push(children[i]);
            }
          }
          Loader.off();
        }
      });

      return posts;
    }
  }

})();
