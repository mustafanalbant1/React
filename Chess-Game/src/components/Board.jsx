// Board.js
import Square from './Square';
import SquareBoard from './SquareBoard';

const colorControl = (i) => {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return (x + y) % 2 === 0;
}

const positonControl = (i) => {
    const x = i % 8;
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"][x]
    const y = Math.abs(Math.floor(i / 8) - 7);
    return `${letters}${y + 1}`
}

function Board({ board }) {
    return (
        <div className='w-[640px] h-[640px] bg-green-700 flex flex-wrap'>
            {board.flat().map((brd, i) => (
                <Square key={i} colorValue={colorControl(i)} positonControl={positonControl(i)}>
                    {brd && <SquareBoard brd={brd} positonControl={positonControl(i)} />}
                </Square>
            ))}
        </div>
    );
}

export default Board;
Board.js
