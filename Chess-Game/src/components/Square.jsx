import { useDrop } from "react-dnd";
import { move } from "./Game";

function Square({ children, colorValue, positonControl }) {
    const [, drop] = useDrop({
        accept: 'chess',
        drop: (item) => {
            const [fromPosition] = item.id.split('_')
            move(fromPosition, positonControl)
        }
    })
    return (
        <div ref={drop} className={`${colorValue ? 'bg-green-800' : 'bg-green-200'} w-[80px] h-[80px] flex items-center justify-center cursor-grab`}>
            {children}
        </div>
    );
}

export default Square;
Square.js
Square.js
