import React from "react";
import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/getname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.lastname);
      } else if (response.status === 401) {
        alert("User Not Found");
      }
    } catch (error) {
      console.error("ERROR:", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="Firstname"
      />

      <button onClick={handleLogin}>CHECK</button>
    </div>
  );
}

export default App;
