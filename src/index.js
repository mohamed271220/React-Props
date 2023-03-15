import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div className="my-style">
    <h1>My Contacts</h1>
    <Card
      name="byonce"
      email="b@beyonce.com"
      tel="+123 456 789"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-116.jpg"
    />
    <Card
      name="black jake"
      email="b@blackJaker.com"
      tel="+0399995000"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-117.jpg"
    />
  </div>,
  document.getElementById("root")
);
