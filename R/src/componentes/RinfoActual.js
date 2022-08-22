import RcuadroMuestra from "./RcuadroMuestra";

export default function RinfoActual(){
    return(
        <div className="data-container">
            <h1>DATA</h1>
            <div className="muestra-data">
                <div className="total-ok">    
                    <RcuadroMuestra titulo="Total OK"></RcuadroMuestra>
                </div>
                <div className="total-pulir">
                    <RcuadroMuestra titulo="Total pulir"></RcuadroMuestra>
                </div>   
            </div>

            <div className="muestra-data">
                <div className="total-lija">    
                    <RcuadroMuestra titulo="Total lija"></RcuadroMuestra>
                </div>
                <div className="total-scrap">
                    <RcuadroMuestra titulo="Total scrap"></RcuadroMuestra>
                </div>   
            </div>

            <div className="muestra-data">
                <div className="total">    
                    <RcuadroMuestra titulo="Total"></RcuadroMuestra>
                </div>
                <div className="suma1v">
                    <RcuadroMuestra titulo="Suma1v"></RcuadroMuestra>
                </div>   
            </div>
            <button className="boton-carga-elementos">PRESS</button>
        </div>

    )
}