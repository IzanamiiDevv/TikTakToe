import './../assets/Menu.css';
import './../assets/button.css';

export default function Menu({ goStart, goMulti, setMode,makeStart }:any) {
    return(
        <div className="Menu">
            <h1>TicTacToe</h1>
            <button id='Start' className='button' onClick={()=>{
                goStart(true);
                setMode('normal');
            }}>
                <div className="top">Start</div>
                <div className="bottom"></div>
            </button>
            <br />
            <button className='button' onClick={()=>{
                goMulti(true);
                makeStart(true);
                setMode('multiplayer');
            }}>
                <div className="top">Multiplayer</div>
                <div className="bottom"></div>
            </button>
            <br />
            <button className='button' onClick={()=>{
                
            }}>
                <div className="top">Settings</div>
                <div className="bottom"></div>
            </button>
            <br />
            <button className='button'  onClick={()=>{

            }}>
                <div className="top">Exit</div>
                <div className="bottom"></div>
            </button>
        </div>
    )
}