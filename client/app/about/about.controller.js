'use strict';

angular.module('lorenjonesApp')
  .controller('AboutCtrl', function ($scope, $http, socket, $interval, flickr, Lightbox) {
    $scope.bioEntries = [];
    $http.get('/api/bio_entries', {cache: true}).success(function(bioEntries) {
      $scope.bioEntries = bioEntries;
      socket.syncUpdates('bio_entry', $scope.bioEntries);
    });
    $scope.pics = [];
    var per_page = 12;
    $scope.page = 1;
    var src = 'flickr.photosets.getPhotos';
    $scope.loadPhotos = function(page) {
      flickr.query(src, per_page, page)
      .then(function(data) {
        for (var i = 0, len = data.length; i < len; i++) {
          $scope.pics.push(data[i]);
        }
      });
    };
    $scope.loadPhotos($scope.page);
    $scope.loadMore = function() {
      $scope.page++;
      console.log($scope.page);
      $scope.loadPhotos($scope.page);
      console.log($scope.pics);
    };
    $scope.openLightboxModal = function(index) {
      Lightbox.openModal($scope.largePics, index);
    };
  });
