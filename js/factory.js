;(function() {

  /**
   * Factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   *
   */
  angular
    .module('diagnal')
    .factory('videoFactory', videoFactory);

  /** Video factory */
  videoFactory.$inject = ['$http'];

  function videoFactory($http) {
    return {
        /**
          * @function Video Factory : getVideos
          * @param {number} id - Page id.
        */
        getVideos: function(id){
            return $http({
              method: 'GET',
              url: 'API/CONTENTLISTINGPAGE-PAGE'+id+'.json'
            })
        }
    }
  }

})();
