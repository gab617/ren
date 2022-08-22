import { useEffect, useState } from "react"
import RencabezadoSector from "./RencabezadoSector"

export default function Rinput(props){

    let [total,setTotal] = useState(0)
    let [valuev1, getValuev1] = useState(0)
    let [valueRec, getValueRec] = useState(0)
    let [value3,  getValue3] = useState(0)
    valuev1 = new Number(valuev1);
    valueRec = new Number(valueRec);
    value3 = new Number(value3);
    useEffect(()=>{
        setTotal(valuev1+valueRec+value3)
    })

    return(
        <>
        <RencabezadoSector></RencabezadoSector>
        <div className="filax3">
            <div>
                <p>1v</p>
                <input className="inputCuadrado" onChange={(event)=>{getValuev1(event.target.value)}}></input>
            </div>
            <div>
                <p>Rec</p>
                <input className="inputCuadrado" onChange={(event)=>{getValueRec(event.target.value)}}></input>
            </div> 
            <div>
                <p>3v+</p>
                <input className="inputCuadrado" onChange={(event)=> getValue3(event.target.value)}></input>
            </div>
            <div>
                <p>Total</p>
                <h1>{total} </h1>
            </div>
        </div>
        </>
    )
};
