javascript:(function(){
  function $g(s){return document.querySelectorAll(s);}
  function $s(c,stl,v){
    for(var i=0;i<c.length;i++){
      c[i].style[stl]=v;
    }
    return c;
  }
  $g('.gh-issue')
    .s('margin-bottom','20px')
    .s('margin-left','5px')
    .s('margin-right','10px')
    .s('font-size','18px')
    .s('height','200px')
    .s('width','340px');
  $g('.gh-issue-inner')
    .s('height','200px')
    .s('width','340px');
  $g('.gh-issue-key').s('font-size','28px');
  $g('table.gh-print-page td').s('padding','0px');
  $g('.gh-issue-field.gh-issue-field-text.gh-issue-corner').s('width','40px');
})();