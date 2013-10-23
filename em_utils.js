(function(window){
  window.withjQuery = function($){
    // var Report = Backbone.Model.extend({});
    // var ReportCollection = Backbone.Collection.extend({model: Reprot });
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