import React from 'react';
import { Card, Col, Button } from 'antd';

const FoodContainer = ({ name, calories, image, servings, deleteFood }) => {
  return (
    <Col>
      <Card title={name} style={{ width: 250, height: 280, margin: 5 }}>
        <img src={image} height={60} alt="" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button
          className="deleteButton"
          onClick={() => deleteFood(name)}
          type=""
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
};

export default FoodContainer;
