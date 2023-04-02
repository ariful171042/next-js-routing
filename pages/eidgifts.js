import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) throw new error("somthing went wrong.");
  return res.json();
};

const Eidgifts = () => {
  const { data, error, isValidating } = useSWR(
    "http://localhost:4000/eid-gifts",
    fetcher
  );

  const isLoading = !data && !error && isValidating;

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>Eid Mubarak</h2>
      <p>you have received your gift</p>

      {data &&
        data.map((gift) => (
          <div key={gift.id}>
            <h2>{gift.title}</h2>
            <p>{gift.price}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Eidgifts;

// import useSWR from "swr";

// const fetcher = async (url) => {
//   const res = await fetch(url);

//   if (!res.ok) throw new error("somthing went wrong.");
//   const data = await res.json();
//   return data;
// };

// const EidGifts = () => {
//   const { data, error, isValidating } = useSWR(
//     "http://localhost:4000/eid-gifts",
//     fetcher
//   );

//   const isLoading = !data && !error && isValidating;

//   if (isLoading) return <p>Loading...</p>;

//   if (error) return <p>{error.message}</p>;

//   return (
//     <div>
//       <h2>Eid Mubarak</h2>
//       <p>you have received your gift</p>

//       {data &&
//         data.map((gift) => (
//           <div key={gift.id}>
//             <h2>{gift.title}</h2>
//             <p>{gift.price}</p>
//             <hr />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default EidGifts;
