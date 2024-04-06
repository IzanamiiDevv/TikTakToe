import { useState } from 'react';
import './../assets/button.css';
import './../assets/Pick.css';

export default function Choose({ goBack, goStart, setPlayer }: any) {
    const [selectedCard, setSelectedCard] = useState<string>('');

    return (
        <div className="selection">
            <h1>Choose your Side</h1>
            <section className='picker'>
                <div className={`card ${selectedCard === 'X' ? 'active' : ''}`} id='X' onClick={() => {setSelectedCard('X')}}>X</div>
                <div className={`card ${selectedCard === 'O' ? 'active' : ''}`} id='O' onClick={() => {setSelectedCard('O')}}>O</div>
            </section>
            <section className='navigation'>
                <button className="button" onClick={() => {
                    setSelectedCard('');
                    goBack(false);
                }}>
                    <div className="top">Back</div>
                    <div className="bottom"></div>
                </button>
                <button className="button" onClick={()=>{
                    if(selectedCard == '')return;
                    setPlayer(selectedCard);
                    goStart(true);
                }}>
                    <div className="top">Begin</div>
                    <div className="bottom"></div>
                </button>
            </section>
        </div>
    );
}