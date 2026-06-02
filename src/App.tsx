import { useState } from "react";

function App() {
    const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
    </div>
  );
}

export default App;
