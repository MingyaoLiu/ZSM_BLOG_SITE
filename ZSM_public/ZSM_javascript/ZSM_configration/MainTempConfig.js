angular.module('MainTempConfig', []).config(function($sceDelegateProvider, $routeSegmentProvider, $routeProvider) {


    $sceDelegateProvider.resourceUrlWhitelist([
       'self',
       'http://*.youtube.com/**'
    ]);
    $sceDelegateProvider.resourceUrlBlacklist([
        'http://thisistheblacklist.cm'
    ]);
    
    $routeSegmentProvider.options.autoLoadTemplates = true;
    
    // Setting routes. This consists of two parts:
    // 1. `when` is similar to vanilla $route `when` but takes segment name instead of params hash
    // 2. traversing through segment tree to set it up

    $routeSegmentProvider
    
    .when('/welcome', 'welcome.home')
    .segment('welcome', {
        templateUrl: 'ZSM_content/ZSM_template/welcome.html',
        controller: WelcomeCtrl
    })


    .when('/blog', 'blog.home')
    .segment('blog', {
        templateUrl: 'ZSM_content/ZSM_template/temp-blog.html',
        controller: BlogCtrl
    })
    .within()
    .segment('home', {
        templateUrl: 'ZSM_content/ZSM_template/temp-blog-home.html'
    })
    .segment('home', {
        templateUrl: 'ZSM_content/ZSM_template/temp-blog-home.html'
    })
    .up()

    .when('/section1',          's1.home')
    .when('/section1/prefs',    's1.prefs')
    .when('/section1/:id',      's1.itemInfo.tab1')
    .when('/section1/:id/X',    's1.itemInfo.tab1')
    .when('/section1/:id/Y',    's1.itemInfo.tab2')

    .when('/section2',          's2')
    .when('/section2/:id',      's2.itemInfo')

    .when('/section3',          's3')

    .segment('s1', {
        templateUrl: 'ZSM_content/templates/section1.html',
        controller: MainCtrl
    })

    .within()

    .segment('home', {
        templateUrl: 'ZSM_content/templates/section1/home.html'})

    .segment('itemInfo', {
        templateUrl: 'ZSM_content/templates/section1/item.html',
        controller: Section1ItemCtrl,
        dependencies: ['id']})

    .within() 

    .segment('tab1', {
        templateUrl: 'ZSM_content/templates/section1/tabs/tab1.html'})

    .segment('tab2', {
        templateUrl: 'ZSM_content/templates/section1/tabs/tab2.html'})

    .up()

    .segment('prefs', {
        templateUrl: 'ZSM_content/templates/section1/prefs.html'})

    .up()

    .segment('s2', {
        templateUrl: 'ZSM_content/templates/section2.html',
        controller: MainCtrl})

    .within()

    .segment('itemInfo', {
        templateUrl: 'ZSM_content/templates/section2/item.html',
        dependencies: ['id']})

    .up()

    .segment('s3', {
        templateUrl: 'ZSM_content/templates/section3.html'})


    // Also, we can add new item in a deep separately. This is useful when working with
    // routes in every module individually

    $routeSegmentProvider
    
    .when('/section1/:id/Z',    's1.itemInfo.tab3')  

    .within('s1')
    .within('itemInfo')
    .segment('tab3', {
        templateUrl: 'ZSM_content/templates/section1/tabs/tab3.html'})


    // This is some usage of `resolve`, `untilResolved` and `resolveFailed` features

    $routeSegmentProvider
    
    .when('/invalid-template', 's1.invalidTemplate')
    .when('/invalid-data', 's1.invalidData')
    .when('/slow-data', 's1.slowDataSimple')
    .when('/slow-data-loading', 's1.slowDataLoading')
    .when('/inline-view', 's1.inlineParent.inlineChildren')
    .when('/section1/:id/slow',    's1.itemInfo.tabSlow')

    .within('s1')
    .segment('invalidTemplate', {
                templateUrl: 'this-does-not-exist.html',    // 404
                resolveFailed: {
                    templateUrl: 'ZSM_content/templates/error.html',
                    controller: 'ErrorCtrl'
                }
            })
    .segment('invalidData', {
                templateUrl: 'ZSM_content/templates/section1/home.html',     // Correct!
                resolve: {
                    data: function($q) {
                        return $q.reject('ERROR DESCRIPTION');     // Failed to load data
                    }
                },
                resolveFailed: {
                    templateUrl: 'ZSM_content/templates/error.html',
                    controller: 'ErrorCtrl'
                }
            })
    .segment('slowDataSimple', {
        templateUrl: 'ZSM_content/templates/section1/slow-data.html',
        controller: 'SlowDataCtrl',
        resolve: {
            data: function($timeout, loader) {
                loader.show = true;
                return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
            }
        }
    })
    .segment('slowDataLoading', {
        templateUrl: 'ZSM_content/templates/section1/slow-data.html',
        controller: 'SlowDataCtrl',
        resolve: {
            data: function($timeout) {
                return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
            }
        },
        untilResolved: {
            templateUrl: 'ZSM_content/templates/loading.html'
        }
    })
    .segment('inlineParent', {
        templateUrl: 'ZSM_content/templates/section1/inline-view.html'
    })
    .within()
    .segment('inlineChildren', {
                    // no template here
                    controller: 'SlowDataCtrl',
                    resolve: {
                        data: function($timeout) {
                            return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
                        }
                    },
                    untilResolved: {
                        templateUrl: 'ZSM_content/templates/loading.html'
                    }
                })
    .up()

    .within('itemInfo')
    .segment('tabSlow', {
        templateUrl: 'ZSM_content/templates/section1/slow-data.html',
        controller: 'SlowDataCtrl',
        resolve: {
            data: function($timeout) {
                return $timeout(function() { return 'SLOW DATA CONTENT'; }, 2000);
            }
        },
        untilResolved: {
            templateUrl: 'ZSM_content/templates/loading.html'
        }
    })




    $routeProvider.otherwise({redirectTo: '/welcome'}); 
}) ;