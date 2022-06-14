export const getAllPizzas = (reduxState) => reduxState.pizzas.allPizzas;

export const getPizzaById = (pizzaId) => (reduxState) => {
  const allPizzas = reduxState.pizzas.allPizzas;

  const thePizza = allPizzas.find((p) => p.id === pizzaId);
  return thePizza;
};

export function getById(pizzaId) {
  return function selector(reduxState) {
    const allPizzas = reduxState.pizzas.allPizzas;

    const thePizza = allPizzas.find((p) => p.id === pizzaId);
    return thePizza;
  };
}

// // this goes in the component.
// const listOfPizzas = useSelector(getAllPizzas);
// // // expanded
// // const listOfPizzas2 = useSelector((reduxState) => reduxState.pizzas.allPizzas);

// const pizzaById = useSelector(getPizzaById(2));
// // // expanded
// const pizzaById2 = useSelector(getPizzaById);
