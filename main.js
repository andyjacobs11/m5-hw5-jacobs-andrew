var pizza = {
    crust  : "Thick",
    cheese : "Mozzerella",
    sauce  : "Extra",
    addToppings : function() {
      console.log('Please add pepperoni and sausage');
    }
  };


  function orderPizza(myParam){
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
    console.log(pizza.addToppings);
};