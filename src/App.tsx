import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/boardComponent";
import LostFigures from "./components/lostFigures";
import Timer from "./components/timer";
import { Board } from "./models/board";
import { Colors } from "./models/colors";
import { Player } from "./models/player";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="app">
      <Timer currentPlayer={currentPlayer} restart={restart} />

      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="White figures" figures={board.lostWhiteFigures} />
        <LostFigures title="Black figures" figures={board.lostBlackFigures} />
      </div>
    </div>
  );
}

export default App;
