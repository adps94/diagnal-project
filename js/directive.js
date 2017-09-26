
  /**
   *
   * You can use below directives for your app
   *
   */
  ;(function() {

    angular
      .module('diagnal')
      .directive('scrollTrigger', scrollTrigger)
      .directive('errSrc', errSrc);

    // scrollTrigger directive
    scrollTrigger.$inject = ['$window','$rootScope'];

    function scrollTrigger($window,$rootScope) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var raw = element[0];
          var offset = parseInt(attrs.threshold) || 0;
          element.bind('scroll', function () {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight - offset && $rootScope.apiResponse === true) {
                $rootScope.apiResponse = false;
                scope.$apply(attrs.scrollTrigger);
            }
          });
        }
      };
    };

    errSrc.$inject = [];

    function errSrc() {
      return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.errSrc) {
              attrs.$set('src', attrs.errSrc);
            }
          });

          attrs.$observe('ngSrc', function(value) {
            if (!value && attrs.errSrc) {
              attrs.$set('src', attrs.errSrc);
            }
          });
        }
      }
    };


  })();
