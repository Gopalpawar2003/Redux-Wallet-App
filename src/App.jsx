import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, clearHistory } from "./actions";

function App() {
  const dispatch = useDispatch();
  const { balance, transactions } = useSelector((state) => state);

  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    if (!amount) return;
    dispatch(deposit(amount));
    setAmount("");
  };

  const handleWithdraw = () => {
    if (!amount) return;
    dispatch(withdraw(amount));
    setAmount("");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Digital Wallet</h2>

      <h3>Balance: ${balance}</h3>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={() => dispatch(clearHistory())}>
        Clear History
      </button>

      <ul>
        {transactions.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
