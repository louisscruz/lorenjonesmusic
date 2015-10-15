'use strict';

angular.module('lorenjonesApp')
  .controller('AdminWorksCtrl', function ($scope, $http, socket, Modal, works, $q, soundcloud) {
    $scope.works = works.works;
    $scope.editing = null;
    $scope.copiedWork;
    $scope.currentYear = new Date().getFullYear();
    $scope.toggleEdit = function(work) {
      if ($scope.editing === work._id) {
        $scope.editing = false;
        $scope.copiedWork = null;
        works.cacheWork(work);
      } else {
        $scope.editing = work._id;
        $scope.copiedWork = angular.copy(work);
        works.cacheWork(work);
      }
    }
    $scope.groups = [
      'Solo',
      'Chamber',
      'Orchestral',
      'Band',
      'Wind Ensemble',
      'Vocal',
      'Choral',
      'Opera'
    ];
    $scope.addWork = function(isValid) {
      if (isValid) {
        var work = {
          title: $scope.newWork.title,
          category: $scope.newWork.category,
          date: $scope.newWork.date,
          instrumentation: $scope.newWork.instrumentation,
          info: $scope.newWork.info,
          link: $scope.newWork.link,
          audio: $scope.newWork.audio,
          video: $scope.newWork.video
        };
        console.log($scope.newAudio);
        console.log(work.audio);
        works.addWork(work).then(function() {
          $scope.newWork = {};
          $scope.worksForm.$setUntouched();
        });
      }
    };
    $scope.cacheWork = works.cacheWork;
    $scope.updateWork = works.updateWork;
    $scope.checkUrl = function(data) {
      if ($scope.worksTracks.indexOf(data) !== -1) {
        return 'This tracks is already loaded in the player.';
      }
      var deferred = $q.defer();
      soundcloud.testLoad(data).then(function() {
        deferred.resolve();
      }, function() {
        deferred.reject('Invalid Soundcloud URL');
      });
      return deferred.promise;
    };
    $scope.confirmDelete = Modal.confirm.delete(function(work) {
      works.deleteWork(work);
    });
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('work');
    });
  });
