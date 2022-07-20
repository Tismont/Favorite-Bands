import React from "react";
import "./App.css";

type Bands = {
  _id: string;
  name: string;
  origin: string;
  singer: string;
};

function App() {
  const [bands, setBands] = React.useState<Bands[]>([]);

  React.useEffect(() => {
    async function getResults() {
      const response = await fetch(`http://localhost:5000/bands`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const result = await response.json();
      setBands(result);
    }

    getResults();

    return;
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>origin</th>
            <th>singer</th>
          </tr>
          {bands.map((band: Bands) => (
            <tr key={band._id}>
              <td>{band.name}</td>
              <td>{band.origin}</td>
              <td>{band.singer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
