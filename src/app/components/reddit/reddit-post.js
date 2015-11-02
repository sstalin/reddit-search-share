(function () {
  'use strict';

  angular
    .module('redditSearchShare')
    .service('RedditPost', RedditPost);

  /** @ngInject */
  function RedditPost() {
    this.hero = null;
    this.get = get;
    this.set = set;
    this.imgUrl = imgUrl;

    function imgUrl(url){
      var imageURL = /http|https/i.test(url) ? url : "assets/images/unknown.png";
      return imageURL;
    }

    function get() {
      return this.hero;
    }

    function set(post) {
      this.hero = post;
    }
  }

})();
