// pizza types watcgh data types and discuss
const pizzaTypes = [
    "Margherita",
    "Pepperoni",
    "BBQ Chicken",
    "Hawaiian",
    "Vegetarian",
    "Meat Lover's",
    "Buffalo Chicken",
    "Supreme",
    "Four Cheese",
    "Mushroom Delight",
  ];

// Array of pizza toppings
const toppings = [
    "Extra Cheese",
    "Pepperoni",
    "Olives",
    "Mushrooms",
    "Onions",
    "Bell Peppers",
    "Pineapple",
    "Bacon",
    "Chicken",
    "Sausage",
  ];

  // 


  //step 1 let us print out pizza and toppings



  // step 2 get the array sizes and assign them to variables
  let sizePizzaArray=pizzaTypes.length;
  let sizeToppingsArray=toppings.length;


  // step 3 print out array sizes to the console
  console.log(`the pizza array size is : ${sizePizzaArray} and toppings size is ${sizeToppingsArray}`);

  //  step 4  manipulate the arrays add one  new pizza  type and a new topping tip tipp: push()
  //for pizza chefsspecial  for topping holamexico
  //pizzaTypes.push("chefsspecial");
  //toppings.push("holamexico");



  // step 5 print out the new arrays to the console
  console.log(pizzaTypes);
  console.log(toppings);



  // remove the first pizza type and the last topping from the arrays
  //remove the pizza you use splice method tipp: splice(start, deleteCount)
pizzaTypes.splice(0,1);


  //remove the last topping from the array use pop method tipp: pop()
  toppings.pop()

  // step 6 print out the new arrays to the console

  console.log(pizzaTypes);
  console.log(toppings);


  //optional let us create a new menu tip use for loop


  //step 7 create random pizza and topppings

  //step 7-1 first create random index for pizza and toppings use math.random() method
  let randomPizzaIndex=Math.floor(Math.random() * pizzaTypes.length);
  let randomToppingIndex=Math.floor(Math.random() * toppings.length);

  //step 7-2 now we can create our random pizza and toppings let us say randomPizza and randomTopping 
  let newRandomPizza = pizzaTypes[randomPizzaIndex];
  let newRandomTopping = toppings[randomToppingIndex];

  //step 7-3display random pizza and toppings tip use string literal  ´ ´
  console.log(`Your random pizza is ${newRandomPizza} with ${newRandomTopping}`);

  //step 8 create and orderer Pizza object with pizza and toppings properties

  const newPizza = {
    "size": ["large", "medium", "small"],
    "crust": ["thick", "thin"],
    "newToppings": toppings,
    "price": 200
  }

  const newNewPizza = {
    newPizzaType: newRandomPizza,
    newNewRandomToppings: newRandomTopping,
  }



//print out this new  object 
console.log(newNewPizza.newNewRandomToppings);

console.log("8");
console.log(8);



//after we learnt if we will add also prices 









