interface Props {
  guessedLetters: string[];
  wordToGuess: string;
  reveal: boolean;
}

const HangmanWord: React.FC<Props> = ({
  guessedLetters,
  wordToGuess,
  reveal,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        fontSize: "5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: ".2rem solid black",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? undefined
                  : "hidden",

              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
