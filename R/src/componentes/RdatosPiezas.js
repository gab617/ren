import RinputDataPieza from "./RinputDataPieza";
import RtxtDataPieza from "./RtxtDataPieza";

export default function RdatosPiezas(){
    return(
        <div className="container-data-pieza">
            <button>INICIAR CARGAR</button>
            <div>
                <h2>INFO DE LA PIEZA</h2>
                <RinputDataPieza titulo="Codigo Color"></RinputDataPieza>
                <RtxtDataPieza titulo="Cliente"></RtxtDataPieza>
                <RtxtDataPieza titulo="Codigo Virgen"></RtxtDataPieza>
                <RtxtDataPieza titulo="Pieza"></RtxtDataPieza>
                <RtxtDataPieza titulo="Color"></RtxtDataPieza>
            </div> 
            <div>   
                <h2>INFORMACION DEL PROGRAMA</h2>
                <RinputDataPieza titulo="Item programa"></RinputDataPieza>
                <RinputDataPieza titulo="Turno"></RinputDataPieza>
                <RinputDataPieza titulo="Cabina"></RinputDataPieza>
            </div>
            <div>
                <h2>INFO DE CARGA DE CABINA</h2>
                <RinputDataPieza titulo="Virgen"></RinputDataPieza>
                <RinputDataPieza titulo="Recuperado"></RinputDataPieza>
                <RinputDataPieza titulo="3+"></RinputDataPieza>
            </div>        
            <div>
            <h2>INFO OPERADORES</h2>
                <RinputDataPieza titulo="Op. desc"></RinputDataPieza>
                <RinputDataPieza titulo="Op. carga"></RinputDataPieza>
            </div>
            <button>Finalizar carga</button>
        </div>
    )
}