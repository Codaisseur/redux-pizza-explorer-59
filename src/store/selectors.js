export const namesOfFavPizzas = (reduxState) => {
  const userFavs = reduxState.user.favorites;
  const listOfPizzas = reduxState.pizzas.allPizzas;

  const pizzaNames = userFavs.map((pId) => {
    const thePizza = listOfPizzas.find((p) => p.id === pId); // {  .... }
    return thePizza.name;
  });

  return pizzaNames;
};
