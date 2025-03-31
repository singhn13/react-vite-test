import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Hello = () => <h2>Welcome to my Food App!</h2>;

const FoodList = ({ foods }) => (
  <ul>
    {foods.map((food, index) => (
      <li key={index}>{food.name} - {food.desc}</li>
    ))}
  </ul>
);

const StatusMessage = ({ count }) => {
  return <p>{count > 2 ? 'You really love food!' : 'Keep discovering new dishes'}</p>;
};

function App() {
  const [count, setCount] = useState(0);

  const foods = [
    { name: 'Pizza', desc: 'Tomato + Basil' },
    { name: 'Pasta', desc: 'Spinach + Alfredo' },
    { name: 'Bread Bites', desc: 'Garlic + Parmesan' }
  ];

  return (
    <>      
      <Hello />
      <FoodList foods={foods} />
      <StatusMessage count={count} />
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dishes count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
