import { useState } from "react";

export default function App() {
  // initialize state
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending ${message}...`);
    setIsSent(true);
  };
  // check if msg is sent
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleMessageChange}
            placeholder="Message"
            value={message}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
