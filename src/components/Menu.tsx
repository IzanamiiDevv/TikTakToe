import './../assets/Menu.css';
import './../assets/button.css';

export default function Menu({ goStart, goMulti }:any) {
    return(
        <div className="Menu">
            <h1>TicTacToe</h1>
            <button className='button' onClick={()=>{
                goStart(true);
            }}>
                <div className="top">Start</div>
                <div className="bottom"></div>
            </button>
            <br />
            <button className='button' onClick={()=>{
                goMulti(true);
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