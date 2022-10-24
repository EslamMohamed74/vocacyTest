import React, { useState } from "react";
import "./PrimaryButton.scss";
import PlayIcon from "../../../assets/images/PlayIcon.svg";
import PlayIconWhite from "../../../assets/images/playiconWhite.webp";

function primaryButton({ text, video = false }) {
  const [hover, setHover] = useState(false);
  return video ? (
    <button
      className="primaryButton video me-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={hover ? PlayIconWhite : PlayIcon} alt="PlayIcon" />
    </button>
  ) : (
    <button className="primaryButton">{text}</button>
  );
}

export default primaryButton;
