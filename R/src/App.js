import './App.css';
import RinfoActual from './componentes/RinfoActual';
import Rcuadriculas from './componentes/Rcuadriculas';
import RdatosPiezas from './componentes/RdatosPiezas';

/**CUADRICULA */

const btn = document.querySelector(".boton-carga-elementos")

function App() {
  return (
    <div className="App">
        <div className='content'>
          <Rcuadriculas></Rcuadriculas>
          <div className='content-data'>
            <RinfoActual></RinfoActual>
          </div>
          <RdatosPiezas></RdatosPiezas>
        </div>
    </div>
  );
}
export default App;

