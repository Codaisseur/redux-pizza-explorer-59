import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas, getPizzaById } from "../store/pizzas/selectors";
import { userFavorites } from "../store/user/selectors";
import { addPizza, deletePizza } from "../store/pizzas/slice";
import { namesOfFavPizzas } from "../store/selectors";
import { toggleFav } from "../store/user/slice";

const PizzaExplorer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedId, setSelectedId] = useState(161235);

  const dispatch = useDispatch();
  const pizzas = useSelector(getAllPizzas);
  const userFav = useSelector(userFavorites);

  // differences between parametrized and not params selectors:
  // 1. Regular selectors (reduxState) => reduxState.asnda.ada  we pass to useSelector
  // 2. Param selectors: We need to CALL to get back the regular selector (reduxState) => {}
  const namesOfFavs = useSelector(namesOfFavPizzas);
  const selectedPizza = useSelector(getPizzaById(selectedId));

  console.log("selectedPizza", selectedPizza);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newPizza = { name, description, id: Math.random() * 1000 };
    dispatch(addPizza(newPizza));
  };

  return (
    <div>
      <h1>Pizza Explorer!</h1>
      <p>User Favorites: {namesOfFavs.join(" - ")}</p>

      <label>Select Pizza ID:</label>
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(parseInt(e.target.value))}
      >
        {pizzas.map((p) => (
          <option value={p.id}>{p.id}</option>
        ))}
      </select>
      <br />
      <div>The selected pizza is: {selectedPizza.name}</div>
      <br />
      <br />
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {pizzas.map((p) => (
          <div
            key={p.id}
            style={{ border: "1px solid white", marginBottom: 20 }}
          >
            <h3>{p.name}</h3>
            <img src={p.image} width={"300px"} />
            <p>{p.description}</p>
            <button onClick={() => dispatch(toggleFav(p.id))}>
              {userFav.includes(p.id)
                ? "REMOVE FROM FAVORITE"
                : "ADD TO FAVORITE"}
            </button>

            <button onClick={() => dispatch(deletePizza(p.id))}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaExplorer;
