import { useEffect, useState } from 'react';
import './Home.css';
import placeholder from '../../assets/placeholder.png'

function Home() {
  const horaI = 11;
  const minutoI = 47;

  const INITIAL_TIME = horaI * 3600 + minutoI * 60;     
  const RESET_TIME = (horaI - 2) * 3600 + minutoI * 60;

  const [currentTime, setCurrentTime] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime <= RESET_TIME) {
          return INITIAL_TIME; 
        }
        return prevTime - 1;   
      });
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  const horas = Math.floor(currentTime / 3600);
  const minutos = Math.floor((currentTime % 3600) / 60);
  const segundos = currentTime % 60;

  return (
    <div className='home'>
      <div className='call'>
        <p>O segredo para <span className='destaque'>transformar</span> sua vida.</p>
        <h1>Como ser um Casal Perfeito na Cama e nos Negócios SEGUNDO A <span className='destaque'>VONTADE DE DEUS</span></h1>
        <p>Por Mineia Otsuka</p>
        <button onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}>
          COMPRAR AGORA
        </button>
      </div>

      <img className='book' src={placeholder} alt="Capa do Livro" />

      <div className='sale'>
        <p>De R$60,00 por apenas</p>
        <p><span className='oferta'>R$19,00</span></p>
        <p>Oferta por tempo limitado, adquira já o seu!</p>
        <div className='timer'>
          <span>{String(horas).padStart(2, '0')}:</span>
          <span>{String(minutos).padStart(2, '0')}:</span>
          <span>{String(segundos).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
