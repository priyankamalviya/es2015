/*create a constructor Store*/

function Store(){

  let aisle = {
    fruits:[],
    vegetables: []
  }
  
  return {
  // the three dots below convert values sent into an array of data. This can be added by instantiating the constructor and calling its add function
    add: function(category, ...items){
      console.log(items);
      items.forEach(function(value, index, array){
        aisle[category].push(value);
      });
    },
    
    aisle: aisle
  }
}

// create an instance of Store

let myGrocey = new Store();

// push some values by calling add method
myGrocery.add("fruit", "banana", "litchi", "oranges");

console.log(myGrocery.aisle);
// this console.log will return: Object {fruits: ["banana", "litchi", "oranges"],
                                          vegetables: []
}



