'use strict';

angular.module('lorenjonesApp')
  .controller('AdminWorksCtrl', function ($scope, $http, socket, Modal) {
    $scope.works = [];
    $scope.groups = [
      'Solo',
      'Chamber',
      'Orchestral',
      'Wind Ensemble',
      'Vocal',
      'Choral',
      'Opera'
    ];

    $http.get('/api/works', {cache: true}).success(function(works) {
      $scope.works = works;
      socket.syncUpdates('work', $scope.works);
    });

    $scope.addWork = function(isValid) {
      if( isValid ) {
        $http.post('/api/works', {
          title: $scope.newTitle,
          category: $scope.newCategory,
          date: $scope.newDate,
          instrumentation: $scope.newInstrumentation,
          info: $scope.newInfo,
          link: $scope.newLink,
          audio: $scope.newAudio,
          video: $scope.newVideo
        });
        $scope.newTitle = '';
        $scope.newCategory = '';
        $scope.newDate = '2015';
        $scope.newScore = '';
        $scope.newAudio = '';
      }
    };

    $scope.updateWork = function(work) {
      return $http.put('/api/works/' + work._id, {
        title: work.title,
        category: work.category,
        date: work.date,
        instrumentation: work.instrumentation,
        info: work.info,
        link: work.link,
        audio: work.audio,
        video: work.video
      });
    };

    $scope.deleteWork = function(id) {
      $http.delete('/api/works/' + id);
    };

    $scope.confirmDelete = Modal.confirm.delete(function(work) {
      $scope.deleteWork(work._id);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('work');
    });
  });
