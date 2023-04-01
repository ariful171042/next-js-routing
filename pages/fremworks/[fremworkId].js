const Fremwork = ({ fremwork }) => {
  return (
    <div>
      <h1>hi</h1>
      <h1>
        {fremwork.id} - {fremwork.title}
      </h1>
      <p>{fremwork.core}</p>
    </div>
  );
};

export default Fremwork;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:4000/fremworks/${params.fremworkId}`
  );

  const data = await res.json();

  return {
    props: {
      fremwork: data,
    },
  };
}
