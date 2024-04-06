import { useState } from 'react';
import './../assets/button.css';
import './../assets/Game.css';

export default function Game({ player }:{ player:string }){
    const [ cells, setCells ] = useState(['','','','','','','','','']);
    const [ isEnd, setEnd ] = useState(false);
    const [ hasWinner, setWinner ] = useState(false);
    const [ winner , setsWinner ] = useState('');

    function calculateTurn(currentCell: string[]) {
        const availableSpace = currentCell
            .map((item: string, index: number) => item === '' ? index : undefined)
            .filter((index: number | undefined) => index !== undefined);
        
        if(availableSpace.length == 0){
            setEnd(true);
        };
        const newCells:any = [...currentCell];
        newCells[AI(newCells, 'easy')] = player == 'X' ? 'O' : 'X';
        if(validateWinner(newCells,player == 'X' ? 'O' : 'X')){return};
        return newCells;
    }
    
    function AI(array: string[], difficulty: string):number {
        const availableSpace = array
            .map((item: string, index: number) => item === '' ? index : undefined)
            .filter((index: number | undefined) => index !== undefined);
        const indices = availableSpace as number[];
        if (difficulty === 'easy') {
            return indices[Math.floor(Math.random() * indices.length)];
        }

        return 0;
    }

    
    function validateWinner(cells:string[], user:string) {
        const possibleOutCome = [
            //horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //diagonal
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (let i = 0; i < possibleOutCome.length; i++) {
            const [a, b, c] = possibleOutCome[i];
    
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                setWinner(true);
                setsWinner(user);
                setEnd(true);
                return true;
            }
        }
        return false;
    }
    

    return !isEnd ? (
        <div className='Game'>
            <h1>Tic Tac Toe</h1>
            <div className="board-container">
                {cells.map((item:any,index:number)=>{
                    return (<div key={index} className='cells' onClick={()=>{
                        if(item != ''){return};
                        const newCells = [...cells];
                        newCells[index] = player;
                        if(validateWinner(newCells,player)){return};
                        setCells(calculateTurn(newCells));
                    }}>{item}</div>);
                })}
            </div>
            <p className='status'>Hello World</p>
            <button className='button' onClick={()=>{
                setCells(['','','','','','','','','']);
            }}>
                <div className="top">Restart</div>
                <div className="bottom"></div>
            </button>
        </div>
    ) : (
        <End restart={setEnd} clear={setCells} clearWin={setWinner} winner={winner}/>
    )
}

function End({ restart, clear, clearWin, winner }:any){
    return (
        <div className='End'>
            <h1>{ winner } is the Winner</h1>
            <button className='button' onClick={()=>{
                clear(['','','','','','','','','']);
                clearWin(false);
                restart(false);
            }}>
                <div className="top">Restart Game</div>
                <div className="bottom"></div>
            </button>
        </div>
    )
}