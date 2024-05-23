import React from "react";

function Message(props) {
  console.log(props);
  return (
    <div className="message-container">
      <p className={props.type}>{props?.message ? props?.message : ""}</p>
    </div>
  );
}

export default Message;
