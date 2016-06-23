namespace app{
  angular.module('app').config ((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('main page', {
      url: '/main',
      templateUrl: '/client/app/pins.html',
      controller: 'PinsController as vm'
    });
  });

}
