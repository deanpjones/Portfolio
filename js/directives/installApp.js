// DIRECTIVE (connects HTML template to info)
//  creates a custom HTML ELEMENT (<install-app>  </install-app>)
app.directive('installApp', function(){
  return {
    restrict: 'E', 
    scope: {},
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs){
      scope.buttonText = 'Install',
      scope.installed = false, 
      
      scope.download = function(){
        element.toggleClass('btn-active');
        if(scope.installed){
          scope.buttonText = 'Install';
          scope.installed = false;
        }
        else{
          scope.buttonText = 'Uninstall';
          scope.installed = true;
        }
      }
    }
  }
});

// scope - refers to directive's SCOPE (this can be accessed using $scope)
// element - refers to HTML ELEMENT 
// attrs - the element's ATTRIBUTES 
// link - 
//   buttonText - (installApp HTML) buttons TEXT VALUE in HTML 
//   installed - 
//   download() - (installApp HTML) a function that fires when BUTTON is CLICKED
