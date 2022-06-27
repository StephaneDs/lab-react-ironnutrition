import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

const AddFood = (props) => {
  const [values, setvalues] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFoodDisplay((currentState) => [...currentState, values]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food </Divider>

      <label className="boxInput">Name</label>
      <Input
        value={values.name}
        type="text"
        name="name"
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label className="boxInput">Image</label>
      <Input
        value={values.image}
        type="text"
        name="image"
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label className="boxInput">Calories</label>
      <Input
        value={values.calories}
        type="number"
        name="calories"
        min={0}
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <label className="boxInput">Servings</label>
      <Input
        value={values.servings}
        type="number"
        name="servings"
        min={0}
        onChange={(e) =>
          setvalues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <button className="boxInput" type="submit">
        Create
      </button>
    </form>
  );
};

export default AddFood;
