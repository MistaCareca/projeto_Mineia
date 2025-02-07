import './Faq.css';

function Faq(){
    return(
        <div className='faq'>
            <h1>Perguntas</h1>
            <h1>Frequentes</h1> {/*caso prefira do outro jeito vou deixar aqui na linha de baixo*/}
            {/*<h1>Perguntas Frequentes</h1>*/}
            
            <div className='contentP'>
                <h4>“Como Vou ter acesso ao conteúdo?”</h4>
                <p>Através da Plataforma <span className='destaque'>Kiwify!</span> Após finalizar a compra, você receberá diretamente em seu e-mail o link para acessar tudo pelo seu celular, ou qualquer dispositivo de sua preferência.</p>
            </div>
            
            <div className='contentS'>
                <h4>“Se eu não gostar?”</h4>
                <p>Se por alguma razão você não se identificar com o nosso conteúdo, basta solicitar um reembolso <span className='destaque'>no prazo de até 7 dias.</span> Devolveremos seu dinheiro imediatamente.</p>
            </div>
        </div>

    )
}

export default Faq;