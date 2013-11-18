(function(window){
  window.withjQuery = function($){
    $('.gh-issue')
      .css('margin-bottom','20px')
      .css('margin-left','5px')
      .css('margin-right','10px')
      .css('font-size','18px')
      .css('height','200px')
      .css('width','340px');
    $('.gh-issue-inner')
      .css('height','200px')
      .css('width','340px');
    $('.gh-issue-key').css('font-size','28px');
    $('table.gh-print-page td').css('padding','0px');
    $('.gh-issue-field.gh-issue-field-text.gh-issue-corner').css('width','40px');
  }
  window.withjQueryUI = function($){
    var cssText = '<style type=\'text/css\'>'
    + '.ui-selectable .ui-selecting {background: #ccc;}'
    + '.ui-selected .gh-issue-inner .gh-subhead {background: yellow;}'
    + '.ui-selected {background: #ccc;}'
    + '@media print {#menu {display:none;}}'
    + '</style>'
    ;
    $('head').append(cssText);
    removeSelectedItems = function () {
      $('.ui-selected').remove();
    };
    $('body').prepend('<ui id=\'menu\'><li><a href=\'javascript:removeSelectedItems();\'>Remove Selection</a></li></ul>').ready(function(){
      $('#menu').menu();
    });
    setupDDS('.gh-issue', '.gh-issue-print tr > td', {my: 'left+4 top', at: 'left top'});
    function setupDDS (draggableSelector, droppableSelector, dropPosition) {
      dropPosition = dropPosition || {};
      $(draggableSelector)
        .on('mousedown', mouseDown)
        .on('mouseup', mouseUp)
        .draggable({cursor: 'move', start: hDragStart, opacity: 0.5, helper: 'clone'});
      $(droppableSelector).droppable({
          drop: hDropEnd,
          tolerance: 'touch',
          hoverClass: 'drop-hover',
          activeClass: 'ui-state-highlight'
      });
      function mouseDown() {
        dragged = false;
      }
      function mouseUp() {
        if(!dragged) {
          $(this).toggleClass('ui-selected');
        }
      }
      function hDragStart (event, ui) {
        dragged = true;
      }
      function hDropEnd (event, ui) {
        var options = {of: $(this)};
        $.extend(options, dropPosition);
        ui.draggable.position(options);
        ui.draggable.element = $(this);
      }
    }
  }
})(window);