(function(){
  if(!Backbone.ModelBinder.prototype.AaronTest){
    (function extendBackboneBinder () {
      Backbone.ModelBinder.prototype.AaronTest = function (el) {
        return true;
      };

      Backbone.ModelBinder.prototype._isElUserEditable = function (el) {
        return true;
      };

      Backbone.ModelBinder.prototype._getElValue = function(elementBinding, el){
        var elType = el.attr('type');
        if(elType == null)
          return el.html();
        switch (elType) {
          case 'checkbox':
            return el.prop('checked') ? true : false;
          default:
            if(el.attr('contenteditable') !== undefined){
              return el.html();
            }
            else {
              return el.val();
            }
        }
      };

      Backbone.CollectionBinder.prototype.bindOld = Backbone.CollectionBinder.prototype.bind;
      Backbone.CollectionBinder.prototype.bind = function(collection, parentEl){
        this.bindOld(window.collectionResult, jQuery('#report-ylyc-cont1 tbody'));
        this.bindOld(collection, parentEl);
      };

      Backbone.CollectionBinder.prototype.copyViewValuesToCollection = function(){
        var parentEl = $(this._elManagerFactory._getParentEl());
        var models = [];
        var children = parentEl.children();
        for (var ii = 0; ii < children.length; ii++) {
          var child = children[ii];
          var model = new Backbone.Model();
          var binder = new Backbone.ModelBinder();
          binder.bind(model, child, this._options);
          binder.copyViewValuesToModel();
          models.push(model);
        }
        this._collection.add(models, {silent: true});
      };
    })();
  }

  if(!window.startTest){
    window.startTest = function(){
      window.collectionResult = new Backbone.Collection([]);
      var rowHtml = '<tr><td data-name="firstName"></td><td data-name="lastName"></td><td data-name="phone"></td></tr>';
      var elManagerFactory = new Backbone.CollectionBinder.ElManagerFactory(rowHtml, "data-name");
      collectionBinder = new Backbone.CollectionBinder(elManagerFactory, {date:'>:nth-child(1)', orgnization:'>:nth-child(2)', researcher:'>:nth-child(3)', lastYear:'>:nth-child(4)', thisYear: '>:nth-child(5)', nextYear:'>:nth-child(6)', next2Year:'>:nth-child(7)', next3Year:'>:nth-child(8)', next4Year:'>:nth-child(9)', evaluation:'>:nth-child(10)'});
      Backbone.ModelBinder.SetOptions({initialCopyDirection: Backbone.ModelBinder.Constants.ViewToModel});
      collectionBinder.bind(window.collectionResult, jQuery('#report-ylyc-cont1 tbody'));
      collectionBinder.copyViewValuesToModel();
    };
  }
})();