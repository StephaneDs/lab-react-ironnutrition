import './App.css';
import { useState } from 'react';
import { Button, Divider, Row } from 'antd';
import AddFood from './components/AddFood';
import FoodContainer from './components/FoodContainer';
import SearchBar from './components/SearchBar';
import foods from './foods.json';

function App() {
  const [foodDisplay, setFoodDisplay] = useState(foods);
  const [search, setSearch] = useState('');

  const foodToDisplay = foodDisplay.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  const deleteFood = (name) => {
    const keepFood = foodDisplay.filter((food) => food.name !== name);
    setFoodDisplay(keepFood);
  };

  return (
    <div className="App">
      <AddFood setFoodDisplay={setFoodDisplay} />

      <SearchBar className="boxInput" search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodToDisplay.map((food) => {
          console.log(food);
          return (
            <FoodContainer key={food.image} {...food} deleteFood={deleteFood} />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
