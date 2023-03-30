import { useRouter } from "next/router";

const Documentation = () => {
  const {
    query: { all = [] },
  } = useRouter();
  if (all.length === 4) {
    return (
      <p>
        Documentation for topic:{all[0]} - lesson:{all[1]} - example:{all[2]} -
        line:{all[3]}
      </p>
    );
  }
  if (all.length === 3) {
    return (
      <p>
        Documentation for topic:{all[0]} - lesson:{all[1]} - example:{all[2]}
      </p>
    );
  }
  if (all.length === 2) {
    return (
      <p>
        Documentation for topic:{all[0]} - lesson:{all[1]}
      </p>
    );
  }
  if (all.length === 1) {
    return <p>Documentation for topic:{all[0]}</p>;
  }
  return <div>Documentation</div>;
};

export default Documentation;
