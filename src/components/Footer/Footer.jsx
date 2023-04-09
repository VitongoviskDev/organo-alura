import "./Footer.css"

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__social">
                <ul className="footer__social__list">
                    <li className="footer__social__list__item"><a  className="footer__social__list__link" href=""><img className="footer__social__list__icon" src="./imagens/fb.png " alt="facebook logo" /></a></li>
                    <li className="footer__social__list__item"><a  className="footer__social__list__link" href=""><img className="footer__social__list__icon" src="./imagens/tw.png " alt="twitter logo" /></a></li>
                    <li className="footer__social__list__item"><a  className="footer__social__list__link" href=""><img className="footer__social__list__icon" src="./imagens/ig.png " alt="instagram logo" /></a></li>
                </ul>
            </div>
            <img className="footer__logo" src="./imagens/logo.png" alt="Imagem de fundo do rodapé" />
            <p className="footer__text">Desenvolvido por Alura</p>
        </footer>
    )
}

export default Footer;