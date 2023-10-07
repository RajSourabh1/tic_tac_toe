import React,{useState} from "react";
import Icon from "./components/icon";
import {ToastContainer,toast} from 'react-toastify';
import "./style.css";

// first install npm i react-toastify to use toastify
import 'react-toastify/dist/ReactToastify.css';


let tikArr = new Array(9).fill("");

const App = () => {

    /* this veriable is chacking the chacking of which person, if isCross is ture that means
     the chance is of cross person otherwise the the chance is of circle person.*/
    let [isCross,setIsCross] = useState(true);

    let [winMessage,setWinMessage] = useState("");

    // logic for playAgain
    const playAgain = ()=>{
        tikArr.fill("");
        setIsCross(true)
        setWinMessage("")
    }

    // reset score
    const resetScore = () => {
        localStorage.setItem("score",JSON.stringify({cross:0,circle:0}));
        window.location.reload();
    }

    //logic for findWinner
    const findWinner = ()=>{
        // row1
        if(tikArr[0]==tikArr[1]&&tikArr[0]==tikArr[2]&&tikArr[0]!=""){
            // setWinMessage(tikArr[0]+" has won");
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[0] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
        }
        //row2
        else if(tikArr[3]==tikArr[4]&&tikArr[3]==tikArr[5]&&tikArr[3]!=""){
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[3] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
        }
        //row3
        else if(tikArr[6]==tikArr[7]&&tikArr[6]==tikArr[8]&&tikArr[6]!=""){
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[6] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
        }
        //col1
        else if(tikArr[0]==tikArr[3]&&tikArr[0]==tikArr[6]&&tikArr[0]!=""){
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[0] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
            }
        //col2
        else if(tikArr[1]==tikArr[4]&&tikArr[1]==tikArr[7]&&tikArr[1]!=""){
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[1] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
        }
        //col3
        else if(tikArr[2]==tikArr[5]&&tikArr[2]==tikArr[8]&&tikArr[2]!=""){
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[2] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
        }
        //diagonal1
        else if(tikArr[0]==tikArr[4]&&tikArr[0]==tikArr[8]&&tikArr[0]!=""){
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[0] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
        }
        //diagonal2
        else if(tikArr[2]==tikArr[4]&&tikArr[2]==tikArr[6]&&tikArr[2]!=""){
            const data = JSON.parse(localStorage.getItem("score"));

            if(tikArr[2] == "cross"){
                setWinMessage("blue has won");
                data.cross += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }else{
                setWinMessage("red has won");
                data.circle += 10;
                localStorage.setItem("score",JSON.stringify(data));
            }
        }
        //for draw
        else if(tikArr.indexOf("")==-1){
            setWinMessage("Draw");
        }
    }

    //changeItem logic:- means changing the sing(i.e.X or O) of the box if the box is empty
    const changeItem = (index)=>{

        // if someone wins the game then we have to stop the person to click on the box
        if(winMessage){
            return toast("Game over");
        }
        if(tikArr[index]!=""){
            // i.e. index already filled
            return toast("click on the unfilled box");
        }
        else if(tikArr[index]==""){
            //putting the sign at that index
            tikArr[index]=isCross==true?"cross":"circle"
            
            // transfering the chance from one to another
            setIsCross(!isCross);
            findWinner()
        }
    }

    return (
        <div>
            <ToastContainer position="bottom-center"/>  
           {
            winMessage!=""?
                <div className="heading">
                    <h1>{winMessage.toUpperCase()}</h1>
                    <h2>blue has {JSON.parse(localStorage.getItem("score")).cross} & red has {JSON.parse(localStorage.getItem("score")).circle}</h2>
                    <button onClick={playAgain}>Play Again</button>
                    <button onClick={resetScore}>reset score</button>
                </div>
             :
            <>
               <h1>Chance is of {isCross==true?"blue":"red"}</h1>
               <h2>{
                   localStorage.getItem("score") 
                 ? `blue has ${JSON.parse(localStorage.getItem("score")).cross} & red has ${JSON.parse(localStorage.getItem("score")).circle}`
                 : localStorage.setItem("score",JSON.stringify({cross:0,circle:0}))}</h2>
             </>
           }

           <div className="grid">
              {
                // tikArr.map((value,index)=>(
                //     <div key={index} className="box" onClick={()=>changeItem(index)}>
                //         <Icon ic={value}/>
                //     </div>
                // ))
                tikArr.map((value,index)=>(
                  <div key={index} className="box" onClick={()=>changeItem(index)}>
                        <Icon ic={value}/>
                  </div>
                ))
              }
           </div>

        </div>
    )
}

export default App;