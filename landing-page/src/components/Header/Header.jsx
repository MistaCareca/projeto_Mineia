import './Header.css'

function Header({ onNavigate, activeSection }) {
    return (
        <header className='header'>
            <nav className='nav'>
                <p className={activeSection === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</p>
                <p className={activeSection === 'beneficios' ? 'active' : ''} onClick={() => onNavigate('beneficios')}>Benefícios</p>
                <p className={activeSection === 'depoimentos' ? 'active' : ''} onClick={() => onNavigate('depoimentos')}>Depoimentos</p>
                <p className={activeSection === 'faq' ? 'active' : ''} onClick={() => onNavigate('faq')}>FAQ</p>
                <p className={activeSection === 'sobre' ? 'active' : ''} onClick={() => onNavigate('sobre')}>Sobre</p>
            </nav>
        </header>
    );
}


export default Header;