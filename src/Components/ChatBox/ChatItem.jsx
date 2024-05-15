import React from "react";
import Avatar from "./Avatar.jsx";

export default function ChatItem({ setChat }) {
  return (
    <div className="chat-item" onClick={() => setChat(true)}>
      <Avatar src="" height={55} width={55} />
      <div className="chat-item-infos">
        <div className="avatar-infos">
          <span className="username">Chi Man</span>
          <span className="timeline">1 days ago</span>
        </div>
        <p className="last-message">Hi! Chi Man</p>
      </div>
    </div>
  );
}
