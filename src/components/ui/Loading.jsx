import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import "./Loading.scss";

const messages = [
  "Добро пожаловать в Kitchen Cafe!",
  "Приятного аппетита!",
  "Мы рады вас видеть!",
];
const Loading = () => {
  const [displayText, setDisplayText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[msgIndex];
    let timer;

    if (!isDeleting && charIndex <= currentMessage.length) {
      timer = setTimeout(() => {
        setDisplayText(currentMessage.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayText(currentMessage.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (charIndex > currentMessage.length) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (charIndex < 0) {
      setIsDeleting(false);
      setMsgIndex((prev) => (prev + 1) % messages.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, msgIndex]);

  return (
    <div className="loading-wrapper">
      <div className="loading-content">
        <img src={logo} alt="Логотип" />
        <span className="typewriter-text">
          {displayText}
          <span className="blink">|</span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
