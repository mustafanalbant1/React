// squareBoard.jsx
import { DragPreviewImage, useDrag } from "react-dnd";
import images from "../components/Images"; // Resim haritasını içe aktarıyoruz

function squareBoard({ brd, positonControl }) {
    const pieceImage = images[`${brd.color}_${brd.type}`]; // Dinamik resim yükleme

    const [{ isDragging }, drag, preview] = useDrag({
        type: 'chess',
        item: { id: `${positonControl}_${brd.color}_${brd.type}` },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging }
        }
    })
    return (
        <div ref={drag}>
            <DragPreviewImage src={pieceImage} connect={preview} />
            <img src={pieceImage} alt={`${brd.color}_${brd.type}`} />
        </div>
    );
}

export default squareBoard;
