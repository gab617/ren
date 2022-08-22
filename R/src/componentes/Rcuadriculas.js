import Rsector from './Rsector';

export default function Rcuadriculas() {
    return (
        <div className="Rcuadriculas">
            <div className='OK' titulo="OK">
                <h3>OK</h3>
                <Rsector></Rsector>
            </div>

            <div className='PULIR' titulo="PULIR">
                <h3>PULIR</h3>
                <div className='fila1'>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                </div>
                <div className='fila2'>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                </div>
            </div>

            <div className='LIJA'>
                 <h3>LIJA</h3>
                <div className='fila1'>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                </div>
                <div className='fila3'>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                </div>
                <div className='fila2'>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                </div>
            </div>

            <div className='SCRAP'>
                <h3>SCRAP</h3>
                <div className='fila1'>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                </div>
                <div className='fila3'>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                    <Rsector></Rsector>
                </div>
            </div>
        </div>
    )
}