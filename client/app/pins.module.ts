namespace app{
  angular.module('app').config ((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('main page', {
      url: '/main',
      templateUrl: '/client/pins/pins.html',
      controller: 'PinController as vm'
    });
  });

}
