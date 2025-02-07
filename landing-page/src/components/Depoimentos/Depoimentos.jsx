import './Depoimentos.css'
import CardDep from '../CardDep/CardDep'

function Depoimentos(){
    return(
        <div>
            <h1>Depoimentos dos nossos clientes:</h1>
            <div className='depoimentos'>
                <CardDep nome= "Caitlyn" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <CardDep nome= "Violet" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <CardDep nome= "Jinx" desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            </div>
        </div>
    )
}

export default Depoimentos;