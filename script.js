


var groceryList = [
  {
name:"flour",
price:5
},
{
  name:"sugar",
  price:3.50
},
{
  name:"yeast",
  price:2
}
];
function groceryReceipt(){
  var total=0;

  for(var i=0; i< groceryList.length; i++){
    console.log(groceryList[i].name + " " + groceryList[i].price.toFixed(2));
    total+= groceryList[i].price
  }
  console.log("Your subtotal is: " + total.toFixed(2));
}

groceryReceipt()
