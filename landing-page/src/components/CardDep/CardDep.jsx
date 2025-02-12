import './CardDep.css'


function CardDep(props){
    return(
    <div>
        {/*add depois de ter fotos {props.foto}*/}
        <img src={props.foto} alt={props.nome}/>
        <h4>{props.nome}</h4>
        <p>{props.desc}</p>
    </div>)
}

export default CardDep;