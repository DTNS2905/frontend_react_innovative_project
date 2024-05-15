import { useState } from "react";
import "../../Assets/css/messenger.css";
import Content from "./Content.jsx";
import Sidebar from "./Sidebar.jsx";

export default function Messenger() {
  const [chat, setChat] = useState(false);
  return (
    <div className="messenger">
      <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} />
    </div>
  );
}
