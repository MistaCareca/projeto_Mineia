import './CardDep.css'
import placeholder from '../../assets/placeholder.png'

function CardDep(props){
    return(
    <div>
        {/*add depois de ter fotos {props.foto}*/}
        <img src={placeholder} alt={props.nome}/>
        <h4>{props.nome}</h4>
        <p>{props.desc}</p>
    </div>)
}

export default CardDep;