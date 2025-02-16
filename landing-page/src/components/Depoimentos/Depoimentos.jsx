import './Depoimentos.css'
import CardDep from '../CardDep/CardDep'
import placeholder from '../../assets/usuario-de-perfil.png'

function Depoimentos(){
    return(
        <div className='tit'>
            <h1>Depoimentos dos nossos clientes:</h1>
            <div className='depoimentos'>
                <CardDep foto={placeholder} nome= "Anônimo" desc = "Um ato de bravura! Para escrever essas palavras, aliceçadas na lei de Deus, precisa ter tido muito conhetcimento delas, e desejado vivê-las no íntimo da alma."/>
                <CardDep foto={placeholder} nome= "Anônimo" desc = "O livro certamente terá grande impacto entre aqueles que buscam viver de maneira plena e alinhada com os ensinamentos de Deus. É uma obra pequena em tamanho mas rica em sabedoria, e que certamente pode crescer ainda mais em um futuro segundo volume."/>
                <CardDep foto={placeholder} nome= "Anônimo" desc = "Que esse livro chegue nas mãos, nos corações e nas mentes que estejam abertas para receber esse despertar. Fiquei encantada, sobretudo por ter sido escrito por uma mulher!"/>
            </div>
        </div>
    )
}

export default Depoimentos;