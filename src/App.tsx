import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import words from "./wordList.json";

const getRandomWord = (words: string[]): string => {
  return words[Math.floor(Math.random() * words.length)];
};
const getIncorrectGuesses = (
  guessedLetters: string[],
  wordToGuess: string
): string[] => {
  return guessedLetters.filter((letter) => !wordToGuess.includes(letter));
};
const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord(words));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectGuesses = getIncorrectGuesses(guessedLetters, wordToGuess);
  const isLoser = inCorrectGuesses.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string): void => {
      const isAlreadyGuessed = guessedLetters.includes(letter);
      if (isAlreadyGuessed || isWinner || isLoser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      const isInvalidKey = !key.match(/^[a-z]$/);
      if (isInvalidKey) return;

      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        {isWinner && "You Won"}
        {isLoser && "You Lost"}
      </div>

      <HangmanDrawing inCorrectGuesses={inCorrectGuesses} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          addGuessedLetter={addGuessedLetter}
          inActiveLetters={guessedLetters.filter(
            (letter) => !wordToGuess.includes(letter)
          )}
        />
      </div>
    </div>
  );
};

export default App;
