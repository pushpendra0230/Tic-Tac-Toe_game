import { useState } from "react";
import CardComponent from "./components/CardComponent";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winPatterns) {
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) setWinner(newWinner);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:px-6 md:px-8 lg:px-12 
      bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9] animate-gradient-x shadow-xl"
    >
      {/* Title */}
      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7] 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 
        transform -rotate-3 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:brightness-125"
      >
        TIC-TAC-TOE
      </h1>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mb-6 px-5 sm:px-6 py-2 sm:py-3 text-md sm:text-lg font-semibold text-white bg-green-600 
        rounded-lg border-2 border-green-500 hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-md"
      >
        RESET
      </button>

      {/* Game Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 p-4 bg-white bg-opacity-10 rounded-lg shadow-lg border-2 border-white/20">
        {board.map((value, index) => (
          <CardComponent
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {/* Status Message */}
      <div
        className={`mt-6 text-lg sm:text-xl md:text-2xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg 
          transition-all duration-300 transform hover:scale-105 text-center
          ${
            winner
              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse"
              : "bg-gradient-to-r from-blue-500 to-indigo-600 text-gray-200 hover:brightness-110"
          }`}
      >
        {winner ? `🏆 Winner: ${winner} 🎉` : `🎮 Turn: ${isXTurn ? "X" : "O"}`}
      </div>
    </div>
  );
};
export default App;