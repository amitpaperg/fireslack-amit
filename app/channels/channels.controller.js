(function() {
  'use strict';

  angular.module('angularfireSlackApp')
    .controller('ChannelsController', function($state, Auth, Users, profile, channels){
      var vm = this;

      vm.profile = profile;
      vm.channels = channels;

      vm.getDisplayName = Users.getDisplayName;
      vm.getGravatar = Users.getGravatar;
      vm.newChannel = {
        name: ''
      };

      vm.logout = function(){
        Auth.$unauth();
        $state.go('home');
      };

      vm.createChannel = function(){
        vm.channels.$add(vm.newChannel).then(function(ref){
          $state.go('channels.messages', {
            channelId: ref.key()
          });
        });
      };
    });

})();
