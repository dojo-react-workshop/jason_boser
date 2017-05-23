'use strict'

const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000
  setTimeout( () => {
    const foundItem = warehouse.find((obj) => obj.item === item);

    if (foundItem) {
      callback(foundItem);
    }

  }, deliveryTime )
}

// orderSupplies('paint', (delivery) => {
//   console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);
//   orderSupplies('brush', (delivery) => {
//     console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
//   });
// });

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

let paintReceived = false;
let brush = null;

orderSupplies('paint', (item) => {
  printItem(item);
  if(brush === null){
    //still waiting for brush, set paint flag so brush knows we're ready
    paintReceived = true;
  }else{
    //brush was in the garage, get it and print
    printItem(brush);
  }
});

orderSupplies('brush', (item) => {
  if(paintReceived){
    //already had my paint, brush is now ready so let's paint!
    printItem(item); 
  }else{
    //got my brush, but paint isn't ready, put brush "in the garage"
    brush = item;
  }
});

console.log("getting supplies!!");