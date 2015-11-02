(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('redditSearchShare'));

    it('MainController should be defined', inject(function($rootScope, $controller) {
      var scope = $rootScope.$new();
      var vm = $controller('MainController', {$scope: scope});
      expect(vm).toBeDefined();

    }));
  });
})();
