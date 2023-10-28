import { useState } from "react";

import "./styles/App.css";
import "./styles/reset.css";

import { getPrompt } from "./api/api.js";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";

function App() {
  const [input, setinput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Como posso te ajudar hoje ?",
    },
  ]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const prompt = input;
    let response = await getPrompt(prompt);
    response = response.data.split("\n").map((linha) => <p>{linha}</p>);

    setChatLog([...chatLog, { user: "me", message: input }]);
    setChatLog([...chatLog, { user: "gpt", message: response }]);
    setinput("");
  }

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((item, index) => {
            return (
              <ChatMessage key={index} message={item.message}></ChatMessage>
            );
          })}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              className="chat-input-textarea"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
