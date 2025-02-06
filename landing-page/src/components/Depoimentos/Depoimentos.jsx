import './Depoimentos.css'
import CadrDep from '../CadrDep/CadrDep'

function Depoimentos(){
    return(
        <div>
            <h1>Depoimentos dos nossos clientes:</h1>
            <div className='depoimentos'>
                <CadrDep nome= "Caitlyn" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <CadrDep nome= "Violet" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <CadrDep nome= "Jinx" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            </div>
        </div>
    )
}

export default Depoimentos;