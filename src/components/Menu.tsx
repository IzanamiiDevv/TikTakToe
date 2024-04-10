import './../assets/Menu.css';
import './../assets/button.css';

export default function Menu({ goStart, goMulti, setMode,makeStart }:any) {
    return(
        <div className="Menu">
            <div className='title'>
                <div className='text'>Tic</div>
                <div className='text'>Tac</div>
                <div className='text'>Toe</div>
            </div>
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
            <footer>
                <div>&copy;Created By IzanamiiDevv</div>
                <a href='https://github.com/IzanamiiDevv?tab=repositories'>Click Here for More Contents Like This</a>
            </footer>
        </div>
    )
}