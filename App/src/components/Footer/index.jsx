import './index.css'
import {BsGithub, BsLinkedin} from 'react-icons/Bs'
import {FaUniversity} from 'react-icons/Fa'
const Footer = () =>{
    return (
        <footer>
            <did className="footer_website">
                <div style={{width:"60px", height:"60px", backgroundColor:"green", textAlign:"center", borderRadius:"100%"}}>Logo</div>
                <p>Imparcialmente te mostrando o que realmente importa</p>
            </did>
            <did className="footer_divider">
                <h4>Institucional</h4>
                <ul className="footer_list">
                    <li>
                        <a href="#">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="#">Política de Privacidade</a>
                    </li>
                </ul>
            </did>
            <did className="footer_divider">
                <h4>O Projeto</h4>
                <ul className="footer_list">
                    <li>
                        <a href="#">Funcionamento</a>
                    </li>
                    <li>
                        <a href="#">Contribuição</a>
                    </li>
                    <li>
                        <a href="#">Comunidade</a>
                    </li>
                </ul>
            </did>
            <did>
                <h4>Nossas Redes</h4>
                <ul className="footer_socials">
                    <li>
                        <a href="#"><BsGithub/></a>
                    </li>
                    <li>
                        <a href="#"><BsLinkedin/></a>
                    </li>
                    <li>
                        <a href="#"><FaUniversity/></a>
                    </li>
                </ul>
            </did>
        </footer>
    )
}

export default Footer