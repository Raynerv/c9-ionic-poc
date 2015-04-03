angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, SensorService) {
  SensorService.relayr.login({
    success: function(token) {
      SensorService.devices.getAllDevices(
          function(devices) {
            $scope.html = devices;
          }
      )}});
  /*
   $scope.click = function(arg) {
    alert('Clicked ' + arg);
  }
  $scope.html = '<div class="flip-container" ontouchstart="this.classList.toggle(\'hover\');"> \
	<div class="flipper"> \
		<div class="front"> \
			<img src="http://lh5.ggpht.com/M7U_7_yQs5ffBg4F78Q2fPDvi90SEw9t2UKQMbnV85CWumpG3dxzPlW7wgMdyiD0xqzqth1pDGuso7ljc74SEbuBtbM-BSNMi_PPf9I"/> \
		</div> \
		<div class="back"> \
			<img src="http://lh4.ggpht.com/C52ACr_1crR1nOtxVxLGFJa5B_bFqf-MLLm-AKvBdJrHvPFv6fGKw3B2S5fZ6grU-RRR9tPTLSqwaIzkQxY5U-V_dUlgAyoEEM0hE0Ta=s660"/> \
		</div> \
	</div> \
  </div>';
  */

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});