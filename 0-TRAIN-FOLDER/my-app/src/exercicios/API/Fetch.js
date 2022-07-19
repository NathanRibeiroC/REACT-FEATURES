import React from "react";

export default function Fetch() {
  const [starWarsData, setStarWarsData] = React.useState({});

//   CONSIDERED A SIDE EFFECT
//   ON THIS FIRST APPROACH WE HAVE A INFINIT LOOP
//   CONSOLE.LOG KEEPS LOG ALL THE TIME   
//   fetch("https://swapi.dev/api/people/1")
//     .then((res) => res.json())
//     .then((data) => setStarWarsData(data));

//   console.log(starWarsData)

  React.useEffect(function(){
  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));
  })

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
