import React, { useEffect, useState } from "react";

const AddToCard = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cars = props.data;
  useEffect(() => {
    setTotalPrice(
      cars.reduce(
        (total, car) => Number(total) + Number(car.price.replace("$", "")),
        0
      )
    );
  }, [cars]);

  return (
    <>
      <div className="container">
        <h4>Selected Cars and Prices</h4>
        <div style={{ textAlign: "center" }}>
          total price: {`$${Math.round(totalPrice, 2)}`}
        </div>
        <div
          style={{ height: "3px", width: "100%", background: "black" }}
        ></div>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Brand Name</td>
              <td>Model</td>
              <td>Year</td>
              <td> price</td>
            </tr>
          </thead>
          <tbody>
            {cars &&
              cars.map((car) => {
                return (
                  <tr className="table-primary">
                    <td>{car.car}</td>
                    <td>{car.car_model}</td>
                    <td>{car.car_model_year}</td>
                    <td>{car.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddToCard;
