import './Sobre.css'
import sobreImg from '../../assets/sobreImg.png'
import instagranIcon from '../../assets/instagranIcon.png'
import tiktokIcon from '../../assets/tiktokIcon.png'
import youtubeIcon from '../../assets/youtubeIcon.png'

{/* ó aqui ta um exemplo de como fazer os paragrafos ficarem sobre a img

<div style={{ position: "relative", display: "inline-block" }}>
<img src={sobreImg} alt="Descrição" style={{ width: "100%", height: "auto" }} />
<p style={{
    position: "absolute",
    top: "100px", 
    left: "290px", 
    color: "white", 
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding: "5px"
}}>
    teste
</p>
</div>
*/}

function Sobre(){
    return(

        <div className='sobre'>
            <div className='content'>
                <img src={sobreImg} alt="foto_autora" className='foto_autora'/>
                <p className='p1'><span className='destaque_sobre'>Mineia Kazume Coelho Otsuka</span> é uma <br></br>produtora rural brasileira, filha de<br></br>imigrantes japoneses que chegaram ao<br></br>Brasil na década de 1970. Sua família foi<br></br>pioneira na inovação da fruticultura no<br></br>Vale do São Francisco, especialmente no<br></br>cultivo de mangas para exportação.</p>
                <p className='p2'>Atualmente, Mineia se destaca como especialista em proteção<br></br>solar na agricultura, abordando desafios como a radiação solar<br></br>intensa e seus efeitos nas plantações. Ela enfatiza a importância<br></br>de adaptar o manejo agrícola e a irrigação para minimizar os<br></br>impactos do calor excessivo, garantindo a qualidade das safras.</p>
                <p className='p3'>Além de sua atuação no campo, Mineia compartilha suas<br></br>experiências e conhecimentos sobre fruticultura em plataformas digitais,<br></br>como YouTube e TikTok, promovendo o protagonismo feminino no agronegócio.</p>
            </div>
            <div className='redes'>
                <h3>Conheça mais do trabalho de Mineia:</h3>
                    <div className='links'>
                        <a href="https://www.youtube.com/@mineiaotsuka"><img src= {youtubeIcon} className='ytb' alt="icone youtube" /></a>
                        <a href="https://www.tiktok.com/@mineiaotsuka?lang=pt-BR"><img src= {tiktokIcon} alt="icone tiktok" /></a>
                        <a href="https://www.instagram.com/mineiaotsuka/"><img src={instagranIcon} alt="icone instagram" /></a>
                    </div>
            </div>
        </div>
        
    )
}

export default Sobre;