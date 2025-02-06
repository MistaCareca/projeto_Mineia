import './CadrDep.css'


function CadrDep(props){
    return(
    <div>
        {/*add depois de ter fotos {props.foto}*/}
        <img src='' alt={props.nome} />
        <h4>{props.nome}</h4>
        <p>{props.desc}</p>
    </div>)
}

export default CadrDep;