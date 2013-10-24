(function(window){
  window.withjQuery = function($){
    Backbone.CollectionBinder.prototype.copyViewValuesToModel = function(){
      var parentEl = $(this._elManagerFactory._getParentEl());
      var children = parentEl.children();
      for (var ii = 0; ii < children.length; ii++) {
        var child = children[ii];
        var model = new Backbone.Model();
        var binder = new Backbone.ModelBinder();
        binder.bind(model, child, this._options);
        binder.copyViewValuesToModel();
        this._collection.models.push(model);
      };
    };

    Backbone.ModelBinder.prototype._isElUserEditable = function (el) {
      return true;
    }
    window.ems = new Backbone.Collection([]);
    var rowHtml = '<tr><td data-name="firstName"></td><td data-name="lastName"></td><td data-name="phone"></td></tr>';
    var elManagerFactory = new Backbone.CollectionBinder.ElManagerFactory(rowHtml, "data-name");
    collectionBinder = new Backbone.CollectionBinder(elManagerFactory, {date:':nth-child(1)', orgnization:':nth-child(2)', researcher:':nth-child(2)', lastYear:':nth-child(3)', thisYear: ':nth-child(4)', nextYear:':nth-child(5)', next2Year:':nth-child(6)', next3Year:':nth-child(7)', next4Year:':nth-child(8)', evaluation:':nth-child(9)'});
    collectionBinder.bind(window.ems, jQuery('#report-ylyc-cont1 tbody'));
    collectionBinder.copyViewValuesToModel();
  }
})(window);


$(jQuery('.titlebar')[3]).append('<a href="javascript:start()">开始！！！</a>');
function start(){
  Backbone.CollectionBinder.prototype.copyViewValuesToModel = function(){
    var parentEl = $(this._elManagerFactory._getParentEl());
    var children = parentEl.children();
    for (var ii = 0; ii < children.length; ii++) {
      var child = children[ii];
      var model = new Backbone.Model();
      var binder = new Backbone.ModelBinder();
      binder.bind(model, child, this._options);
      binder.copyViewValuesToModel();
      this._collection.models.push(model);
    };
  };

  Backbone.ModelBinder.prototype._isElUserEditable = function (el) {
    return true;
  }
  window.ems = new Backbone.Collection([]);
  var rowHtml = '<tr><td data-name="firstName"></td><td data-name="lastName"></td><td data-name="phone"></td></tr>';
  var elManagerFactory = new Backbone.CollectionBinder.ElManagerFactory(rowHtml, "data-name");
  collectionBinder = new Backbone.CollectionBinder(elManagerFactory, {date:':nth-child(1)', orgnization:':nth-child(2)', researcher:':nth-child(2)', lastYear:':nth-child(3)', thisYear: ':nth-child(4)', nextYear:':nth-child(5)', next2Year:':nth-child(6)', next3Year:':nth-child(7)', next4Year:':nth-child(8)', evaluation:':nth-child(9)'});
  collectionBinder.bind(window.ems, jQuery('#report-ylyc-cont1 tbody'));
  collectionBinder.copyViewValuesToModel();
}