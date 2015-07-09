angular.module('taufan.ionizer.app.storage', [])

.factory('NewsStorage', function() {
  return {
    all: function() {
      var news = window.localStorage['news'];
      if(news) {
        return angular.fromJson(news);
      }
      return {};
    },
    save: function(news) {
      window.localStorage['news'] = angular.toJson(news);
    },
    clear: function() {
      window.localStorage.removeItem('news');
    }
  }
})

.factory('ProductsStorage', function() {
  return {
    all: function() {
      var products = window.localStorage['products'];
      if(products) {
        return angular.fromJson(products);
      }
      return {};
    },
    save: function(products) {
      window.localStorage['products'] = angular.toJson(products);
    },
    clear: function() {
      window.localStorage.removeItem('products');
    }
  }
})

.factory('ProfileStorage', function() {
  return {
    all: function() {
      var profile = window.localStorage['profile'];
      if(profile) {
        return angular.fromJson(profile);
      }
      return {};
    },
    save: function(profile) {
      window.localStorage['profile'] = angular.toJson(profile);
    },
    clear: function() {
      window.localStorage.removeItem('profile');
    }
  }
}) 

.factory('SettingsStorage', function() {
  return {
    all: function() {
      var settings = window.localStorage['settings'];
      if(settings) {
        return angular.fromJson(settings);
      }
      return {
            // Initial App Setting Values
            options: [
            {
               name: 'First Option',
               checked: true
            }, 
            {
               name: 'Second Option',
               checked: false
            }, 
            {
               name: 'Third Option',
               checked: false
            }],
            languages: {
                    en: {
                        id: 'en',
                        name: 'english',
                        icon: '-'
                    },
                    it: {
                        id: 'it',
                        name: 'italiano',
                        icon: '-'
                    },
                    de: {
                        id: 'de',
                        name: 'deutsch',
                        icon: '-'
                    }
                },
            language: 'it',
            theme: 'positive',
            range: 40
        };
    },
    save: function(settings) {
      window.localStorage['settings'] = angular.toJson(settings);
    },
    clear: function() {
      window.localStorage.removeItem('settings');
    }
  }
})