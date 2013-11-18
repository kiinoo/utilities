javascript:(function(){
  function $g(s){return document.querySelectorAll(s);}
  function $s(c,stl,v){
    for(var i=0;i<c.length;i++){
      c[i].style[stl]=v;
    }
    return c;
  }
  $g('.gh-issue').$s('margin','0px 5px 20px 10px');
  $g('.gh-issue').$s('height','200px');
  $g('.gh-issue').$s('width','340px');
  $g('.gh-issue').$s('font-size','18px');
  $g('.gh-issue-key','font-size','28px');
  $g('.gh-issue-inner','height','200px');
  $g('.gh-issue-inner','width','340px');
  $g('table.gh-print-page td','padding','0px');
  $g('.gh-issue-field.gh-issue-field-text.gh-issue-corner','width','20px');
})();