angular.module('taufan.ionizer.app.services', ['ionic'])

// Notification 
.factory('IonizerService', function($q, $ionicPlatform, $ionicLoading, $cordovaLocalNotification, $cordovaVibration) {
    var service = {};

    service.message = function(msg) {
        var deferred = $q.defer();
        //send a notification
        $ionicPlatform.ready(function() {
            $cordovaLocalNotification.add({
                message: msg
            });
            $cordovaVibration.vibrate(100);
        });
    }

    service.showLoading = function() {
        $ionicLoading.show({
            template: '<i class="icon ion-loading-c"></i> Loading Data',
            showBackdrop: false,
            showDelay: 10
        });
    }

    service.hideLoading = function() {
        $ionicLoading.hide();
    }

    return service;
})

// Home Data: Home page configuration
.factory('Data', function() {
    var data = {};

    data.items = [{
        title: 'Products',
        icon: 'ion-ios7-cart',
        note: 'Our Products',
        url: '#/app/products'
    }, {
        title: 'Gallery',
        icon: 'ion-images',
        note: 'Our Photos',
        url: '#/app/gallery'
    }, {
        title: 'News',
        icon: 'ion-ios7-calendar-outline',
        note: 'Latest News',
        url: '#/app/news'
    }, {
        title: 'Map',
        icon: 'ion-map',
        note: 'Our Location',
        url: '#/app/map'
    }, {
        title: 'Profile',
        icon: 'ion-person-stalker',
        note: 'Profile',
        url: '#/app/profile'
    }, {
        title: 'Contact',
        icon: 'ion-email',
        note: 'Contact Us',
        url: '#/app/contact'
    }];

    return data;
})

// Menu Data: Menu configuration
.factory('MenuData', function() {
    var data = {};

    data.items = [{
        title: 'Home',
        icon: 'ion-ios7-home',
        url: '#/app'
    }, {
        title: 'Tabs',
        icon: 'ion-ios7-albums-outline',
        url: '#/app/tabs'
    }, {
        title: 'Cordova Plugin',
        icon: 'ion-iphone',
        url: '#/app/plugins'
    }];

    return data;
})

// Plugins Data: Mobile Plugins configuration
.factory('PluginsData', function() {
    var data = {};

    data.items = [{
        title: 'Device',
        icon: 'ion-ipad',
        note: 'Device API',
        url: '#/app/plugins/device'
    }, {
        title: 'Notifications',
        icon: 'ion-alert',
        note: 'Dialogs API',
        url: '#/app/plugins/notifications'
    }, {
        title: 'Barcode',
        icon: 'ion-qr-scanner',
        note: 'Barcode Scanner',
        url: '#/app/plugins/barcodescanner'
    }];

    return data;
})

// Map Data: Map configuration
.factory('MapData', function() {
    var data = {};

    data.map = {
        zoom: 12,
        center: {
            latitude: 52.49,
            longitude: 13.4
        },
        markers: [{
            id: 1,
            icon: 'img/blue_marker.png',
            latitude: 52.49,
            longitude: 13.4,
            title: 'Headquarters'
        }, {
            id: 2,
            latitude: 52.44,
            longitude: 13.4,
            title: 'Brach 1'
        }, {
            id: 3,
            latitude: 52.48,
            longitude: 13.6,
            title: 'Branch 2'
        }, {
            id: 4,
            icon: 'img/plane.png',
            latitude: 52.52,
            longitude: 13.6,
            title: 'Airport'
        }]
    };

    return data;
})

// Gallery Data: Gallery configuration
.factory('GalleryData', function() {
    var data = {};

    data.items = [{
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: 'img/gallery-1.jpg',
        location: 'Berlin, June 2015'
    }, {
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        src: 'img/gallery-2.jpg',
        location: 'Bolzano, May 2013'
    }, {
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        src: 'img/gallery-3.jpg',
        location: 'Jakarta, August 2013'
    }];

    return data;
})

// News Data: JSON
.factory('NewsData', function($http, $q, NewsStorage) {

    var json = 'json/news.json';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};

    service.async = function() {
        $http({
                method: 'GET',
                url: json,
                timeout: 5000
            }).
            // this callback will be called asynchronously
            // when the response is available.
        success(function(d) {
                data = d.result;
                NewsStorage.save(data);
                deferred.resolve();
            }).
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        error(function() {
            data = NewsStorage.all();
            deferred.reject();
        });

        return promise;

    };

    service.getAll = function() {
        return data;
    };

    service.get = function(newId) {
        return data[newId];
    };

    return service;
})

// Products Data: JSON
.factory('ProductsData', function($http, $q, ProductsStorage) {

    var json = 'json/products.json';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};

    service.async = function() {
        $http({
                method: 'GET',
                url: json,
                timeout: 5000
            }).
            // this callback will be called asynchronously
            // when the response is available.
        success(function(d) {
                data = d.result;
                ProductsStorage.save(data);
                deferred.resolve();
            }).
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        error(function() {
            data = ProductsStorage.all();
            deferred.reject();
        });

        return promise;

    };

    service.getAll = function() {
        return data;
    };

    service.get = function(productId) {
        return data[productId];
    };

    service.getLetterLimit = function() {
        return 100;
    };

    return service;
})

// Profile Data: JSON
.factory('ProfileData', function($http, $q, ProfileStorage) {

    var json = 'json/profile.json';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};

    service.async = function() {
        $http({
                method: 'GET',
                url: json,
                timeout: 5000
            }).
            // this callback will be called asynchronously
            // when the response is available.
        success(function(d) {
                data = d.result;
                ProfileStorage.save(data);
                deferred.resolve();
            }).
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        error(function() {
            data = ProfileStorage.all();
            deferred.reject();
        });

        return promise;

    };

    service.getAll = function() {
        return data;
    };

    service.get = function(memberId) {
        return data[memberId];
    };

    return service;
})