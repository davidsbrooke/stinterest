namespace app {

  export class PinsController{

    constructor(
    private $location:ng.ILocationService,
    private UserService: app.UserService
  ) {
    if ($location.search().code) {
      UserService.setToken($location.search().code);
      UserService.setUser();
      $location.search('');
    }
  }
}
  angular.module('app').controller('PinsController', PinsController);
}
