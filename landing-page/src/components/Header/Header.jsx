import './Header.css'

function Header({ onNavigate }){
    return(
        <header className='header'>
            <nav className='nav'>
                <p onClick={ () => onNavigate('home') }>Home</p>
                <p onClick={ () => onNavigate('beneficios') }>Benefícios</p>
                <p onClick={ () => onNavigate('depoimentos') }>Depoimentos</p>
                <p onClick={ () => onNavigate('faq') }>FAQ</p>
                <p onClick={ () => onNavigate('sobre') }>Sobre a Autora</p>
            </nav>
        </header>
    )
}

export default Header;