angular.module('app.intro', [])
  .directive('myIntro', function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/intro/intro.tpl.html',
      controller: 'IntroCtrl',
      controllerAs: 'intro'      
    }
  })
  .controller('IntroCtrl', function IntroCtrl() {
    var intro = this;

    
  });