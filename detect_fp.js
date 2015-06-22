// ==UserScript==
// @name        detect_fp
// @namespace   amiuniqueext
// @include     *
// @version     1
// @grant       none
// @run-at document-start
// @noframes
//@require https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==


var width = screen.width;
var height = screen.height;
var colorDepth = screen.colorDepth;
var availWidth = screen.availWidth;
var availHeight = screen.availHeight;
var pixelDepth = screen.pixelDepth;

var appName = navigator.appName;
var appVersion = navigator.appVersion;
var appCodeName = navigator.appCodeName;
var language = navigator.language;
var languages = navigator.languages;
var platform = navigator.platform;
var product = navigator.product;
var productSub = navigator.productSub;
var vendor = navigator.vendor;
var vendorSub = navigator.vendorSub;
var plugins = navigator.plugins;


var myController = {
  nbAccessMap : new Object(),
  nbAccessTotal : 0,
  displayed : false,
  initTable : function(){
      this.nbAccessMap["width"]=0;
      this.nbAccessMap["height"]=0;
      this.nbAccessMap["colorDepth"]=0;
      this.nbAccessMap["availWidth"]=0;
      this.nbAccessMap["availHeight"]=0;
      this.nbAccessMap["pixelDepth"]=0;
      this.nbAccessMap["appName"]=0;
      this.nbAccessMap["appVersion"]=0;
      this.nbAccessMap["appCodeName"]=0;
      this.nbAccessMap["language"]=0;
      this.nbAccessMap["languages"]=0;
      this.nbAccessMap["platform"]=0;
      this.nbAccessMap["product"]=0;
      this.nbAccessMap["productSub"]=0;
      this.nbAccessMap["vendor"]=0;
      this.nbAccessMap["vendorSub"]=0;
      this.nbAccessMap["plugins"]=0;
  },
  navigatorAccessed : function(param){
    this.nbAccessMap[param]++;
    this.nbAccessTotal ++;
    if(this.nbAccessTotal > 18 && !this.displayed){
      this.displayed = true;
      this.nbAccessMap["url"] = document.domain;
      $.ajax({
          url: 'http://localhost:9000/detect_fingerprinters',
          crossDomain: true, 
          data: this.nbAccessMap, 
          contentType: 'application/x-www-form-urlencoded', 
          method: "POST",
      });
    }
  }
};

myController.initTable();

/* Screen object */

Object.defineProperty(screen, 'width', {
    get: function(){myController.navigatorAccessed('width');return width;}
});

Object.defineProperty(screen, 'height', {
    get: function(){myController.navigatorAccessed('height');return height;}
});

Object.defineProperty(screen, 'colorDepth', {
  get: function(){myController.navigatorAccessed('colorDepth');return colorDepth;}
});

Object.defineProperty(screen, 'availWidth', {
  get: function(){myController.navigatorAccessed('availWidth');return availWidth;}
});

Object.defineProperty(screen, 'availHeight', {
  get: function(){myController.navigatorAccessed('availHeight');return availHeight;}
});

Object.defineProperty(screen, 'pixelDepth', {
  get: function(){myController.navigatorAccessed('pixelDepth');return pixelDepth;}
});

/* Navigator object */

//App info
Object.defineProperty(navigator, 'appName', {
  get: function(){myController.navigatorAccessed('appName');return appName;}
});

Object.defineProperty(navigator, 'appVersion', {
  get: function(){myController.navigatorAccessed('appVersion');return appVersion;}
});

Object.defineProperty(navigator, 'appCodeName', {
  get: function(){myController.navigatorAccessed('appCodeName');return appCodeName;}
});


Object.defineProperty(navigator, 'language', {
  get: function(){myController.navigatorAccessed('language');return language;}
});

Object.defineProperty(navigator, 'languages', {
  get: function(){myController.navigatorAccessed('languages');return languages;}
});

Object.defineProperty(navigator, 'platform', {
  get: function(){myController.navigatorAccessed('platform');return platform;}
});

Object.defineProperty(navigator, 'product', {
  get: function(){myController.navigatorAccessed('product');return product;}
});

Object.defineProperty(navigator, 'productSub', {
  get: function(){myController.navigatorAccessed('productSub');return productSub;}
});

Object.defineProperty(navigator, 'vendor', {
  get: function(){myController.navigatorAccessed('vendor');return vendor;}
});

Object.defineProperty(navigator, 'vendorSub', {
  get: function(){myController.navigatorAccessed('vendorSub');return vendorSub;}
});


Object.defineProperty(navigator, 'plugins', {
  get: function(){myController.navigatorAccessed('plugins');return plugins;}
});


 
