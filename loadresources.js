javascript:(function(){
function loadNamedResources(resourceNames, callback) {
  options = {};
  resourceNames = resourceNames.split(',');
  for (var i = 0; i < resourceNames.length; i++) {
    options[resourceNames[i].trim().toLowerCase()] = true;
  };
  options.callback = callback;
  resArray = [];
  if(options.jquery){
    resArray.push(['http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function(){return typeof jQuery === 'undefined';}]);
  }
  if(options.jqueryui){
    resArray.push(['http://code.jquery.com/ui/1.10.3/jquery-ui.js','http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css', function(){return typeof jQuery === 'undefined' || typeof jQuery.ui === 'undefined';}]);
  }
  loadRS(resArray, options.callback);
}
function loadRS (resources, callback){
  var loader = function(src,handler){
    var ext = src.split('.').pop().toLowerCase();
    var rEL;
    if(ext !== 'css') {
      rEL = document.createElement('script');
      rEL.src = src;
    }else{
      rEL = document.createElement('link');
      rEL.href = src;
      rEL.rel = 'stylesheet';
    }
    rEL.onload = rEL.onreadystatechange = function(){
      console.log('loaded ' + src);
      rEL.onreadystatechange = rEL.onload = null;
      handler();
    };
    var head = document.getElementsByTagName('head')[0];
    (head || document.body).appendChild( rEL );
  };
  var multiloader = function(item, next){
    var fns = arguments;
    if(typeof item === 'string'){
      loader(item, next);
    } else if(Object.prototype.toString.call(item) === '[object Array]'){
      var predict = item[item.length - 1];
      if(typeof predict === 'function'){
        item.pop();
      } else {
        predict = null;
      }
      var shouldLoad = !predict || predict();
      (function(){
        if(item.length!=0 && shouldLoad){
          loader(item.shift(), arguments.callee);
        } else {
          next && next();
        }
      })();
    }
  };
  (function(){
    if(resources.length!=0){
      multiloader(resources.shift(),arguments.callee);
    }else{
      callback && callback();
    }
  })();
}
window.loadRS = loadRS;
window.loadNamedResources = loadNamedResources;
})();
