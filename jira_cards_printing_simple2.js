javascript:(function(){
  function $g(s,stl,v){
    var c=document.querySelectorAll(s);
    for(var i=0;i<c.length;i++){
      c[i].style[stl]=v;
    }
    return c;
  }
  $g('.gh-issue','margin','0px 5px 20px 10px');
  $g('.gh-issue','height','200px');
  $g('.gh-issue','width','340px');
  $g('.gh-issue','font-size','18px');
  $g('.gh-issue-key','font-size','28px');
  $g('.gh-issue-inner','height','200px');
  $g('.gh-issue-inner','width','340px');
  $g('table.gh-print-page td','padding','0px');
  $g('.gh-issue-field.gh-issue-field-text.gh-issue-corner','width','20px');
})();


javascript:(function(){
function $g(s,stl,v){
  var c=document.querySelectorAll(s);
  for(var i=0;i<c.length;i++){
    c[i].style[stl]=v;
  }
  return c;
}
var g1='.gh-issue';
var g2='.gh-issue-inner';
var g3='.gh-edit-non[title="Acceptance Criteria"]';
$g(g1,'margin','5px 5px 28px 10px');
$g(g1,'height','350px');
$g(g1,'width','340px');
$g(g1,'fontSize','18px');
$g(g2,'height','500px');
$g(g2,'width','340px');
$g(g3,'height','400px');
$g(g3,'maxHeight','1000px');
$g('.gh-issue-key','fontSize','24px');
$g('table.gh-print-page td','padding','0px');
$g('.gh-issue-field.gh-issue-field-text.gh-issue-corner','width','20px');
})();

