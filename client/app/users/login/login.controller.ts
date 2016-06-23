namespace app {
  export class UserLoginController {
    public user: IUser;

    public login() {
      this.UserService.login(this.user).then(() => {
        this.$state.go('main page');
      }, (err) => {
        alert(err);
      });
    }

    constructor(
      private UserService: app.UserService,
      private $state: ng.ui.IStateService
    ) {

    }
  }
  angular.module('app').controller('UserLoginController', UserLoginController);
}
