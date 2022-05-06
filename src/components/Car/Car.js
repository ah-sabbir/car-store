import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Car.style.css";

export const Car = (props) => {
  const {
    availability,
    car,
    car_color,
    car_model,
    car_model_year,
    car_vin,
    id,
    price,
  } = props.data;

  return (
    <div>
      <Card
        style={{ width: "18rem", alignContent: "center", textAlign: "center" }}
      >
        <Card.Img
          variant="top"
          src="https://logos-world.net/wp-content/uploads/2021/09/Mercury-Emblem.png"
        />
        <Card.Body>
          <Card.Title>Brand: {car}</Card.Title>
          <Card.Text>Model: {car_model}</Card.Text>
          <Card.Text>Year: {car_model_year}</Card.Text>
          <Card.Text>Color: {car_color}</Card.Text>
          <Card.Text>VIN: {car_vin}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>
            Status : {availability ? "In Stock" : "Out of Stock"}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              props.addToCardHandler(props.data);
            }}
          >
            Add to Card
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
