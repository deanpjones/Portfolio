// DIRECTIVE (connects HTML template to info)
//  creates a custom HTML ELEMENT (<app-info>  </app-info>)
app.directive('appInfo', function(){
  return {
    restrict: 'E', 
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appInfo.html'
  }
});

// CONNECT THE DOTS (how it's all connected?)
// HTML (index.html) --> APPINFO.JS --> APPINFO.HTML
//    <script src="js/directives/appInfo.js"></script>
//    templateUrl: 'js/directives/appInfo.html'

// restrict: 'E'      # specifies HOW the DIRECTIVE (will be used)(E - make a new HTML element)
// scope              # specifies that we pass info to (this directive)(using the INFO ATTRIBUTE (value))
//                    # it plugs in the VALUE from the INFO-ATTRIBUTE to use in the HTML TEMPLATE (KEY)
// '='                # tells the DIRECTIVE (to look for an ATTRIBUTE)
//                          <app-info info='shutterbug'></app-info>
// templateUrl        # connects to the HTML TEMPLATE
