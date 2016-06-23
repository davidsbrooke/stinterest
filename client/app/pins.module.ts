namespace app{
  angular.module('app').config ((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('main page', {
      url: '/',
      templateUrl: '/client/app/pins.html',
      controller: 'PinsController as vm'
    });
  });

}
