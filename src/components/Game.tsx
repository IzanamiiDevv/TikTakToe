import './../assets/button.css';
import './../assets/Game.css';

export default function Game({ player }:{ player:string }){
    return (
        <div className='Game'>
            <h1>Tic Tac Toe</h1>
            <div className="board-container">
                <div className="cells" id="cell1">X</div>
                <div className="cells" id="cell2">O</div>
                <div className="cells" id="cell3"></div>
                <div className="cells" id="cell4"></div>
                <div className="cells" id="cell5"></div>
                <div className="cells" id="cell6"></div>
                <div className="cells" id="cell7"></div>
                <div className="cells" id="cell8"></div>
                <div className="cells" id="cell9"></div>
            </div>
            <button className='button'>
                <div className="top">Restart</div>
                <div className="bottom"></div>
            </button>
        </div>
    )
}