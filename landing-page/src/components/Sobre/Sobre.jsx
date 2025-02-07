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
                <img src={sobreImg} alt="foto_autora" />
                <p className='p1'><span className='destaque'>Mineia Kazume Coelho Otsuka</span> é uma produtora rural brasileira, filha de imigrantes japoneses que chegaram ao Brasil na década de 1970. Sua família foi pioneira na inovação da fruticultura no Vale do São Francisco, especialmente no cultivo de mangas para exportação.</p>
                <p className='p2'>Atualmente, Mineia se destaca como especialista em proteção solar na agricultura, abordando desafios como a radiação solar intensa e seus efeitos nas plantações. Ela enfatiza a importância de adaptar o manejo agrícola e a irrigação para minimizar os impactos do calor excessivo, garantindo a qualidade das safras.</p>
                <p className='p3'>Além de sua atuação no campo, Mineia compartilha suas experiências e conhecimentos sobre fruticultura em plataformas digitais, como YouTube e TikTok, promovendo o protagonismo feminino no agronegócio.</p>
            </div>
            <div className='redes'>
                <h3>Conheça mais do trabalho de Mineia:</h3>
                    <div className='links'>
                        <a href="https://www.youtube.com/watch?v=-YkFMdq1hpw"><img src= {youtubeIcon} alt="icone youtube" /></a>
                        <a href="https://www.youtube.com/watch?v=-YkFMdq1hpw"><img src= {tiktokIcon} alt="icone tiktok" /></a>
                        <a href="https://www.youtube.com/watch?v=-YkFMdq1hpw"><img src={instagranIcon} alt="icone instagram" /></a>
                    </div>
            </div>
        </div>
        
    )
}

export default Sobre;