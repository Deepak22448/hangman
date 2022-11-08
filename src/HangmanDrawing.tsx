import React from "react";

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "10px solid black",
      position: "absolute",
      top: "40px",
      right: "-30px",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      top: "100px",
      backgroundColor: "black",
      right: 0,
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "130px",
      backgroundColor: "black",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "130px",
      backgroundColor: "black",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "190px",
      backgroundColor: "black",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "190px",
      backgroundColor: "black",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

interface Props {
  inCorrectGuesses: string[];
}

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];
const HangmanDrawing: React.FC<Props> = ({ inCorrectGuesses }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {BODY_PARTS.slice(0, inCorrectGuesses.length)}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};

export default HangmanDrawing;
