namespace app {
  interface IPinResourceClass extends IPin,
  ng.resource.IResource<IPinResourceClass> {}
  interface IPinResource extends IPin,
  ng.resource.IResource<IPinResourceClass> {
      update (params: Object, body: Object)
  }
  export class PinService {
    private PinResource: IPinResource;



    constructor() {

    }
  }
angular.module('app').service('PinService', PinService)
}
