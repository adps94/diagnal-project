
  /**
   *
   * You can use below controllers for your app
   * Separate controllers for each logical section
   *
   */
  ;(function() {

    angular
      .module('diagnal')
      .controller('HomeController', HomeController)
      .controller('SearchController', SearchController);

    /** Home controller */

    HomeController.$inject = ['$scope','$rootScope','$state','videoFactory'];

    function HomeController($scope,$rootScope,$state,videoFactory) {

      /**
       * Initialize scope variables and fetch initial data from api
       * @function Home Controller : initialize
      */

      $scope.initialize = function(){
        $scope.curr_page_id = 1;
        $scope.page_end = false;
        $rootScope.apiResponse = true;
        /** @name Home Page : pageDetails*/
        $scope.pageDetails = {};
        $scope.errSrc = "img/placeholder_for_missing_posters.png";

        videoFactory.getVideos($scope.curr_page_id).then(function(response){
          $scope.pageDetails = response.data.page;
          $rootScope.title = $scope.pageDetails.title;
        })
        .catch(function(err){
          // console.log(err);
        });
      }

      /**
       * Go to search page when clicking search icon.
       * @function Home Controller : gotoSearch
      */

      $scope.gotoSearch = function(){
        $state.go('search');
      }

      /** @function Home Controller : loadMoreVideos */

       $scope.loadMoreVideos = function() {
          $scope.curr_page_id++;
          if($scope.curr_page_id < 4 && $rootScope.apiResponse === false){
            videoFactory.getVideos($scope.curr_page_id).then(function(response){
              response.data.page['content-items'].content.forEach(function(video){
                $scope.pageDetails['content-items'].content.push(video);
              });
              $rootScope.apiResponse = true;
            })
            .catch(function(err){
              // console.log(err);
            });
          }
       };

       $scope.initialize();

    }

    /** Search controller */

    SearchController.$inject = ['$scope','$location','videoFactory'];

    function SearchController($scope,$location,videoFactory) {

      /** @function Search Controller : initialize */

      $scope.initialize = function(){
        /** Initialize page variables */
        $scope.curr_page_id = 1;
        $scope.page_end = false;
        $scope.noResult = false;
        $scope.emptyView = 'Search for videos..';
        $scope.errSrc = "img/placeholder_for_missing_posters.png";

        /** @name Search Page : pageDetails*/
        $scope.pageDetails = {};

        videoFactory.getVideos($scope.curr_page_id).then(function(response){
          $scope.pageDetails = response.data.page;
        })
        .catch(function(err){
        });
      }

      /** @function Search Controller : fetchVideos
        * @param {number} page - Page id.
      */

      $scope.fetchVideos = function(page){
        /** Fetch videos from factory using page id */
        videoFactory.getVideos(page).then(function(response){
          response.data.page['content-items'].content.forEach(function(video){
            $scope.pageDetails['content-items'].content.push(video);
            $scope.searchItem();
          });
        })
        .catch(function(err){
        });
      }

      /** @function Search Controller : goBack */

      $scope.goBack = function(){
        /** Back to video listing page*/
        $location.path('/');
      }

      /** @function Search Controller : clear */

      $scope.clear = function(){
        /** Clear input search field*/
        $scope.searchText.$ = '';
        $scope.noResult = false;
        $scope.emptyView = 'Search for videos..';
      }

      /** @function Search Controller : searchItem */

      $scope.searchItem = function(){
        /** Filter videos based on search input */
        $scope.noResult = true;
        $scope.curr_page_id++;
        if($scope.searchText.$ === ''){
          $scope.noResult = false;
          $scope.emptyView = 'Search for videos..';
        }else if($scope.curr_page_id < 4){
          $scope.fetchVideos($scope.curr_page_id);
        }else {
          var result = $scope.pageDetails['content-items'].content.filter(function(video){
            return video.name.toLowerCase().indexOf($scope.searchText.$.toLowerCase()) !== -1;
          });
          if(result.length === 0){
            $scope.noResult = false;
            $scope.emptyView = 'No results';
          }
        }
      }
      $scope.initialize();

    }

  })();
