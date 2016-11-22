function square(x){
  updateXinDatabase(x);
  return x*x;
}

function squareAll(items){
  for(var i=0; i<items.length; i++){
    items[i] = square(items[i]);
  }
}
