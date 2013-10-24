javascript:(function(){
  loadRS([
    ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',             function(){return typeof jQuery === 'undefined';    }],
    ['http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js', function(){return typeof _ === 'undefined';         }],
    ['http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js',     function(){return typeof Backbone === 'undefined';  }],
    ['https://rawgithub.com/theironcook/Backbone.ModelBinder/master/Backbone.ModelBinder.js',           function(){return typeof Backbone.ModelBinder === 'undefined';  }],
    ['https://rawgithub.com/theironcook/Backbone.ModelBinder/master/Backbone.CollectionBinder.js',      function(){return typeof Backbone.CollectionBinder === 'undefined';  }],
  ],function(){
    var timeout = navigator && navigator.appName && navigator.appName.indexOf('icrosoft') != -1 ? 2000 : 100;
    setTimeout(function(){
      loadRS([
        ['https://rawgithub.com/kiinoo/utilities/master/em_utils.js', function(){return typeof window.withjQuery !== 'function';}]
      ],function(){
        withjQuery(jQuery);
      });
    }, timeout);
  });
  function loadRS (resources, callback) {
    var loader = function(src,predict,next){
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
        console.log(((!predict || predict()) ? 'failed loading ': 'loaded: ') + src);
        rEL.onreadystatechange = rEL.onload = null;
        next();
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
            loader(item.shift(), predict, arguments.callee);
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
})();
