// Code goes here

angular.module('myApp', [
  'angularFileUpload'
  ])
  .directive('bzUploader', bzUploader)
  .controller('myCtrl', myController);
  
  function bzUploader(FileUploader) {
    return {
        restrict: "A",
        scope: {
            upId: "=",
            upSection: "=",
            upLimit: "@",
            upUrl: "@?",
            upAutoUpload: "=?",
            upTitle:"@?",
            ngModel: '='
        },
        controllerAs: 'up',
        require: 'ngModel',
        controller: function () {
            var up = this;
            up.upLimit = 5;  
            up.upAutoUpload = true;
            up.upUrl = "/api/file/";
            var data = [];
            data.push({ "id": up.upId });
            data.push({ "section": up.upSection });
            up.uploader = new FileUploader(
                {
                    url: up.upUrl,
                    formData: data,
                    queueLimit: up.upLimit,
                    autoUpload: up.upAutoUpload
                });
            
            up.ngModel = up.uploader;    
            
        },
        link: function(scope, element, attr, ctrl, ngModel) {
          console.log(ngModel);
        },
        templateUrl: 'uploader.html',
        bindToController: true,
    };
}
 
  
function myController(){
  var vm = this;
  vm.name= "Himan";
  vm.id = 14323; 
  vm.Logo ='test';
}