import { useState } from "react";
// import "./Lottery.css";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket)===winningSum;
    
    let buyTicket = () =>{
        setTicket(genTicket(n));
    };

    return(
        <div>
            <h2>Lottery Game!!</h2>
            <p>(Sum should equal to {winningSum}.)</p>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations,You Won!!"}</h3>
        </div>
    );
}