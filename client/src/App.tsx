import React from "react";
import logo from "./logo.svg";
import "./App.css";

type bands = {
  _id: string;
  name: string;
  origin: string;
  singer: string;
};

function App() {
  const [bands, setBands] = React.useState<bands>();

  React.useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/bands`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const result = await response.json();
      setBands(result);
    }

    getRecords();

    return;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
