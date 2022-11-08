import React from "react";
import styles from "./keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface Props {
  activeLetters: string[];
  addGuessedLetter: (letter: string) => void;
  inActiveLetters: string[];
  disabled: boolean;
}

const Keyboard: React.FC<Props> = ({
  activeLetters,
  addGuessedLetter,
  inActiveLetters,
  disabled,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inActiveLetters.includes(letter);
        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive || disabled ? styles.inactive : ""
            }`}
            key={letter}
            onClick={() => addGuessedLetter(letter)}
            disabled={isActive || isInactive || disabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
