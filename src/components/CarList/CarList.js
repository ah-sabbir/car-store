import * as React from "react";
import { useEffect, useState } from "react";
import { Car } from "../Car/Car";
import AddToCard from "./AddToCard/AddToCard";
import "./CarList.style.css";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [addToCard, setAddToCard] = useState([]);

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
      .then((response) => response.json())
      .then((data) => {
        setCars(data.cars);
      });
  }, []);

  const addToCardHandler = (car) => {
    addToCard.length < 10
      ? setAddToCard([...addToCard, car])
      : alert("You can't add more than 10 cars");
    console.log(addToCard);
  };

  return (
    <>
      <div className="container">
        <div style={{ display: "flex", direction: "row" }}>
          <div className="car-container">
            {cars &&
              cars
                .sort(() => Math.random() - 0.5)
                .slice(0, 20)
                .map((car) => (
                  <Car
                    key={car.id}
                    data={car}
                    addToCardHandler={addToCardHandler}
                  />
                ))}
          </div>
          <AddToCard data={addToCard} />
        </div>
      </div>
    </>
  );
};

export default CarList;
