import './Beneficios.css';
import placeholder from '../../assets/placeholder.png'


function Beneficios(){
    return(
        <section className='beneficios'>
            <h1>Benefícios do E-Book:</h1>
            <div className='circulo'>
                <p>Fortalecimento de Relacionamento</p>
                <p className='destaque'>Redução de Estresse</p>
                <p>Melhoria da Comunicação</p>
                <p>Equilíbrio entre Vida Pessoal e Profissional</p>
                <p className='destaque'>Crescimento Espiritual a Dois</p>
                <p className='destaque'>Aumenta a Confiança</p>
                <p>Desenvolvimento Pessoal e Profissional</p>
                <p className='destaque'>Melhoria da Vida Sexual</p>
            </div>
            <img src={placeholder} alt="logo do livro" />
        </section>
    )
}

export default Beneficios