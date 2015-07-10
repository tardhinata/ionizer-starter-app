angular.module('taufan.ionizer.app.controllers', [])

// Home Controller
.controller('HomeCtrl', function($scope, Data) {
    $scope.items = Data.items;
})

// News Controller
.controller('NewsCtrl', function($scope, NewsData, NewsStorage, IonizerService) {

    $scope.news = [];
    $scope.storage = '';

    IonizerService.showLoading();

    NewsData.async().then(
        // successCallback
        function() {
            $scope.news = NewsData.getAll();
            IonizerService.hideLoading();
        },
        // errorCallback 
        function() {
            $scope.news = NewsStorage.all();
            $scope.storage = 'Data from local storage';
            IonizerService.hideLoading();
        },
        // notifyCallback
        function() {}
    );

})

// New Controller
.controller('NewsDetailCtrl', function($scope, $stateParams, NewsData) {

    $scope.news = NewsData.get($stateParams.newsId);

})

// Products Controller
.controller('ProductsCtrl', function($scope, ProductsData, ProductsStorage, IonizerService) {

    $scope.products = [];
    $scope.storage = '';

    IonizerService.showLoading();

    ProductsData.async().then(
        // successCallback
        function() {
            $scope.products = ProductsData.getAll();
            $scope.letterLimit = ProductsData.getLetterLimit();
            IonizerService.hideLoading();
        },
        // errorCallback 
        function() {
            $scope.products = ProductsStorage.all();
            $scope.letterLimit = ProductsData.getLetterLimit();
            $scope.storage = 'Data from local storage';
            IonizerService.hideLoading();
        },
        // notifyCallback
        function() {}
    );

})

// Product Controller
.controller('ProductCtrl', function($scope, $stateParams, ProductsData) {

    $scope.product = ProductsData.get($stateParams.productId);

})

// Gallery Controller
.controller('GalleryCtrl', function($scope, GalleryData) {

    $scope.items = GalleryData.items;

})

// Map Controller
.controller('MapCtrl', function($scope, MapData) {

    $scope.windowOptions = false;

    $scope.onClick = function() {
        this.windowOptions = !this.windowOptions;
    };

    $scope.closeClick = function() {
        this.windowOptions = false;
    };

    $scope.map = MapData.map;

})

// Profile Controller
.controller('ProfileCtrl', function($scope, ProfileData, ProfileStorage, IonizerService) {

    $scope.profile = [];

    IonizerService.showLoading();

    ProfileData.async().then(
        // successCallback
        function() {
            $scope.profile = ProfileData.getAll();
            console.log(JSON.stringify($scope.profile));
            IonizerService.hideLoading();
        },
        // errorCallback 
        function() {
            $scope.profile = ProfileStorage.all();
            $scope.storage = 'Data from local storage';
            IonizerService.hideLoading();
        },
        // notifyCallback
        function() {}
    );

})

// Member Controller
.controller('MemberCtrl', function($scope, $stateParams, ProfileData) {

    $scope.member = ProfileData.get($stateParams.memberId);

})

// Contact Controller
.controller('ContactCtrl', function($scope) {

    $scope.contact = {
        subject: '',
        body: ''
    }

    $scope.submitForm = function() {

        window.plugin.email.open({
            to: ['name@ardhinata.com'],
            cc: ['name1@ardhinata.com'],
            bcc: ['name2@ardhinata.com'],
            subject: $scope.contact.subject,
            body: $scope.contact.body
        });

    };

})

// Plugins Controller
.controller('PluginsCtrl', function($scope, PluginsData) {
    $scope.items = PluginsData.items;
})

// Device Controller
.controller('DeviceCtrl', function($scope) {
    $scope.device = device;
})

// Notifications Controller
.controller('NotificationsCtrl', function($scope, Notification) {

    $scope.notificationMessage = "This is notification message";

    $scope.startNotify = function() {
        Notification.message($scope.notificationMessage);
    }; 

})

// Barcodescanner Controller
.controller('BarcodescannerCtrl', function($scope) {

    $scope.scan = function() {
        cordova.plugins.barcodeScanner.scan(function(result) {
            $scope.result = result;
            $scope.$apply();
        }, function(error) {
            $scope.error = error;
            $scope.$apply();
        });
    };

}) 

// Seetings Controller
.controller('SettingsCtrl', function($scope, $window, SettingsStorage, NewsStorage, ProductsStorage, ProfileStorage) {

    $scope.settings = SettingsStorage.all();

    $scope.changeTheme = function(theme) {
        $scope.appTheme = $scope.settings.theme;
        $window.location = '';
    };

    $scope.saveSettings = function() {
        SettingsStorage.save($scope.settings);
    };

    $scope.$watch('settings', function() {
        SettingsStorage.save($scope.settings)
    }, true);

    $scope.resetSettings = function() {
        SettingsStorage.clear();
        $scope.settings = SettingsStorage.all();
        $window.location = '';
    };

    $scope.resetNewsStorage = function() {
        NewsStorage.clear();
    };

    $scope.resetProductsStorage = function() {
        ProductsStorage.clear();
    };

    $scope.resetProfileStorage = function() {
        ProfileStorage.clear();
    };

})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, MenuData, $ionicActionSheet, SettingsStorage) {

    $scope.items = MenuData.items;

    $scope.settings = SettingsStorage.all();
    $scope.appTheme = $scope.settings.theme;

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
            $scope.modal.hide();
        },

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };

    // Triggered on a button click, or some other target
    $scope.show = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Share</b> This'
            }, {
                text: 'Move'
            }],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

    };

})