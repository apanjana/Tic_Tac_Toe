import React, { useRef, useState }  from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/o.png'
import cross_icon from '../Assets/x.png'

const TicTacToe = () => {

    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    let [count, setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock || data[num] !== "") return;
      
        
        const newData = [...data];
        newData[num] = count % 2 === 0 ? "X" : "O";
        setData(newData);
        setCount(++count);
        checkWinner(newData);
        
    };

    const checkWinner = (data) => {

        const won = (winner) => {
            setLock(true);
            if(winner === 'X'){
                titleRef.current.innerHTML = `Congratulations <img src=${cross_icon} alt="X"/> You won the game`;
            }
            else if(winner === 'O'){
                titleRef.current.innerHTML = `Congratulations <img src=${circle_icon} alt="O"/> You won the game`;
            }
            else{
                titleRef.current.innerHTML = `Game is Draw`;
            }
        }

        if(data[0] === data[1] && data[1] === data[2] && data[0] !== ""){
            won(data[2]);
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[3] !== ""){
            won(data[5]);
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[6] !== ""){
            won(data[8]);
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[0] !== ""){
            won(data[6]);
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[1] !== ""){
            won(data[7]);
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[2] !== ""){
            won(data[8]);
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[0] !== ""){
            won(data[8]);
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[2] !== ""){
            won(data[6]);
        }

        else if(count === 8){
            won("draw");
        }

    }
      
    const reset = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setLock(false);
        titleRef.current.innerHTML = "Tic Tac Toe";
    }

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe</h1>
        <div className="board">
        <div className="row1">
            <div className="boxes" onClick={(e) => {toggle(e,0)}}>
                {data[0] === "X" && <img src={cross_icon} alt="X" />}
                {data[0] === "O" && <img src={circle_icon} alt="O" />}
            </div>
            <div className="boxes" onClick={(e) => {toggle(e,1)}}>
                {data[1] === "X" && <img src={cross_icon} alt="X" />}
                {data[1] === "O" && <img src={circle_icon} alt="O" />}
            </div>
            <div className="boxes" onClick={(e) => {toggle(e,2)}}>
                {data[2] === "X" && <img src={cross_icon} alt="X" />}
                {data[2] === "O" && <img src={circle_icon} alt="O" />}
            </div>
        </div>
        <div className="row2">
            <div className="boxes" onClick={(e) => {toggle(e,3)}}>
                {data[3] === "X" && <img src={cross_icon} alt="X" />}
                {data[3] === "O" && <img src={circle_icon} alt="O" />}
            </div>
            <div className="boxes" onClick={(e) => {toggle(e,4)}}>
                {data[4] === "X" && <img src={cross_icon} alt="X" />}
                {data[4] === "O" && <img src={circle_icon} alt="O" />}
            </div>
            <div className="boxes" onClick={(e) => {toggle(e,5)}}>
                {data[5] === "X" && <img src={cross_icon} alt="X" />}
                {data[5] === "O" && <img src={circle_icon} alt="O" />}
            </div>
        </div>
        <div className="row3">
            <div className="boxes" onClick={(e) => {toggle(e,6)}}>
                {data[6] === "X" && <img src={cross_icon} alt="X" />}
                {data[6] === "O" && <img src={circle_icon} alt="O" />}
            </div>
            <div className="boxes" onClick={(e) => {toggle(e,7)}}>
                {data[7] === "X" && <img src={cross_icon} alt="X" />}
                {data[7] === "O" && <img src={circle_icon} alt="O" />}
            </div>
            <div className="boxes" onClick={(e) => {toggle(e,8)}}>
                {data[8] === "X" && <img src={cross_icon} alt="X" />}
                {data[8] === "O" && <img src={circle_icon} alt="O" />}
            </div>
        </div>
        </div>
        <button className="reset" onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default TicTacToe