import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../store/pizzas/selectors";
import { addPizza, deletePizza } from "../store/pizzas/slice";

const PizzaExplorer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const pizzas = useSelector(getAllPizzas);

  // to add a pizza to my store/state:
  // 1. some form to fill in and submit
  // 2. Add an action to my slice that handles adding a new pizza
  // 3. dispatch this action => payload: { ...pizza }
  // 4. profit!

  console.log("pizzas?", pizzas);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newPizza = { name, description, id: Math.random() * 1000 };
    dispatch(addPizza(newPizza));
  };

  return (
    <div>
      <h1>Pizza Explorer!</h1>
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
            <button onClick={() => dispatch(deletePizza(p.id))}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaExplorer;
