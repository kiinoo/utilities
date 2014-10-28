// ==UserScript==
// @name        jira_task_printing_light
// @namespace   aaron
// @include     http://manjraprd01/secure/Print.jspa?*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
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
var g4='.gh-issue-corner';
$g(g1,'margin','5px 5px 28px 10px');
$g(g1,'height','350px');
$g(g1,'width','340px');
$g(g1,'fontSize','18px');
$g(g2,'height','500px');
$g(g2,'width','340px');
$g(g3,'height','400px');
$g(g3,'maxHeight','1000px');
$g(g4,'width','50px');
$g('.gh-issue-key','fontSize','24px');
$g('table.gh-print-page td','padding','0px');
$g('.gh-issue-field.gh-issue-field-text.gh-issue-corner','width','40px');
})();
