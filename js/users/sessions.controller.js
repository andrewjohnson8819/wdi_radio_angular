(function(){
  angular
  .module("radio")
  .controller("SessionsController", function($auth, $state){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        // console.log("Signin success:", resp);
        $state.go("songIndex");
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };
  });
}());
