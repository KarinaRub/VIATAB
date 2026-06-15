import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/stories")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Backend is not connected"));
  }, []);

  return (
    <main>
      <h1>VIA Tabloid Application</h1>

      <section>
        <h2>Software Engineering</h2>
        <p>Students survived Docker assignment.</p>
      </section>

      <section>
        <h2>Business Department</h2>
        <p>New coffee machine causes campus happiness.</p>
      </section>

      <section>
        <h2>Design Department</h2>
        <p>Students redesign the universe in Figma.</p>
      </section>

      <hr />

      <h3>Backend response:</h3>
      <p>{message}</p>
    </main>
  );
}

export default App;