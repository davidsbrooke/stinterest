namespace app {
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider
    .state('login', {
    url: '/login',
    templateUrl: '/client/app/users/login/login.html',
    controller: 'UserLoginController as vm'
  }).state('user', {
    url:'/user',
    templateUrl: 'client/app/users/users.html',
    controller: 'UserController as vm'
  });
});
}
