angular.module('contactsapp', []).controller('ContactController', ['$scope',
function($scope) {
	$scope.userInfo = false;
	$scope.formItems = [];
	$scope.form = [];
	$scope.submitTheForm = function(item, event) {
		$scope.userInfo = true;
		var item = {
			"firstName" : this.item.firstName,
			"lastName" : this.item.lastName,
			"email" : this.item.email,
			"mobile" : this.item.mobile,
			"landline" : this.item.landline,
			"address" : this.item.address
		}
		//alert(item);
		$scope.formItems.push(item);
		// var val = $scope.item.firstName;
		// alert(val);
		if($scope.item.firstName) {
			//alert(this.item.firstName);
			$scope.form.push(this.item.firstName);
			$scope.item.firstName = "";
		}
		if($scope.item.lastName) {
			$scope.form.push(this.item.lastName);
			$scope.item.lastName = "";
		}
		if($scope.item.email) {
			$scope.form.push(this.item.email);
			$scope.item.email = "";
		}
		if($scope.item.mobile) {
			$scope.form.push(this.item.mobile);
			$scope.item.mobile = "";
		}
		if($scope.item.landline) {
			$scope.form.push(this.item.landline);
			$scope.item.landline = "";
		}
		if($scope.item.address) {
			$scope.form.push(this.item.address);
			$scope.item.address = "";
		}
	};
	$scope.removeTheItem = function(item, event) {
		var index = $scope.formItems.indexOf(item);
		$scope.formItems.splice(index, 1);
	}
}]);
