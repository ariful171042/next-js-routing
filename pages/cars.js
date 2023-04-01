import React from "react";

const Car = ({ cars }) => {
  return (
    <div>
      <h1>Cars List</h1>

      {cars.map((car) => (
        <div className="" key={car.id}>
          <h2>{car.title}</h2>
          <h2>{car.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Car;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/cars");
  const data = await res.json();

  return {
    props: {
      cars: data,
    },
  };
}
