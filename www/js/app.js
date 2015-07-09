
// IONIZER starter app is an ionic based app that provide you the initial template for your mobile development.

angular.module('taufan.ionizer.app', ['ionic', 'taufan.ionizer.app.controllers', 'taufan.ionizer.app.services', 'taufan.ionizer.app.directives', 'taufan.ionizer.app.filters', 'taufan.ionizer.app.storage', 'ngCordova', 'ngSanitize', 'uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      
    // Open any external link with InAppBrowser Plugin
    $(document).on('click', 'a[href^=http], a[href^=https]', function(e){

        e.preventDefault();
        var $this = $(this); 
        var target = $this.data('inAppBrowser') || '_blank';

        window.open($this.attr('href'), target);

    }); 

  });
    
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
     
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
    
    $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.news', {
      url: "/news",
      views: {
        'menuContent' :{
          templateUrl: "templates/news.html",
          controller: 'NewsCtrl'
        }
      }
    })

    .state('app.newsdetail', {
      url: "/news/:newsId",
      views: {
        'menuContent' :{
          templateUrl: "templates/newsDetail.html",
          controller: 'NewsDetailCtrl'
        }
      }
    })

    .state('app.products', {
      url: "/products",
      views: {
        'menuContent' :{
          templateUrl: "templates/products.html",
          controller: 'ProductsCtrl'
        }
      }
    })

    .state('app.product', {
      url: "/products/:productId",
      views: {
        'menuContent' :{
          templateUrl: "templates/product.html",
          controller: 'ProductCtrl'
        }
      }
    })

    .state('app.gallery', {
      url: "/gallery",
      views: {
        'menuContent' :{
          templateUrl: "templates/gallery.html",
          controller: 'GalleryCtrl'
        }
      }
    }) 

    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'MapCtrl'
        }
      }
    })

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html",
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.member', {
      url: "/profile/:memberId",
      views: {
        'menuContent' :{
          templateUrl: "templates/member.html",
          controller: 'MemberCtrl'
        }
      }
    })

    .state('app.contact', {
      url: "/contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/contact.html",
          controller: 'ContactCtrl'
        }
      }
    })  

    .state('app.plugins', {
      url: "/plugins",
      views: {
        'menuContent' :{
          templateUrl: "templates/plugins.html",
          controller: 'PluginsCtrl'
        }
      }
    }) 

    .state('app.device', {
      url: "/plugins/device",
      views: {
        'menuContent' :{
          templateUrl: "templates/plugins/device.html",
          controller: 'DeviceCtrl'
        }
      }
    })

    .state('app.notifications', {
      url: "/plugins/notifications",
      views: {
        'menuContent' :{
          templateUrl: "templates/plugins/notifications.html",
          controller: 'NotificationsCtrl'
        }
      }
    })

    .state('app.barcodescanner', {
      url: "/plugins/barcodescanner",
      views: {
        'menuContent' :{
          templateUrl: "templates/plugins/barcodescanner.html",
          controller: 'BarcodescannerCtrl'
        }
      }
    })

    .state('app.tabs', {
      url: "/tabs",
      views: {
        'menuContent' :{
          templateUrl: "templates/tabs.html"
        }
      }
    })

    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings.html",
          controller: 'SettingsCtrl'
        }
      }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});

