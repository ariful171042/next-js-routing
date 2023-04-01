const Cars = ({ cars }) => {
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.title}</h2>
          <h3>{car.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cars;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/cars");
  const data = await res.json();
  return {
    props: {
      cars: data,
    },
  };
}
