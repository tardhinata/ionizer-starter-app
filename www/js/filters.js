angular.module('taufan.ionizer.app.filters', [])

//To make partition of an array object, according to partition size.
.filter('partition', function($cacheFactory) {
    var arrayCache = $cacheFactory('partition');
    var filter = function(arr, size) {
        console.log("OLD" + JSON.stringify(arr));
        if (!arr) {
            return;
        }
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        var cachedParts;
        var arrString = JSON.stringify(arr);
        cachedParts = arrayCache.get(arrString + size);
        if (JSON.stringify(cachedParts) === JSON.stringify(newArr)) {
            return cachedParts;
        }
        arrayCache.put(arrString + size, newArr);
        console.log("NEW" +  JSON.stringify(newArr));
        return newArr;
    };
    return filter;
})