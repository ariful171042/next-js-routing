const Fremwork = ({ fremworks }) => {
  return (
    <div>
      <h2>Fremwork List</h2>

      {fremworks.map((fremwork) => (
        <div className="" key={fremwork.id}>
          <h2>{fremwork.title}</h2>
          <h2>{fremwork.core}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Fremwork;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/fremworks");
  const data = await res.json();

  return {
    props: {
      fremworks: data,
    },
  };
}
