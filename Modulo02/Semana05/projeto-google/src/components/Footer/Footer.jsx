import './Footer.css'

function Footer() {
    return(
        <div className='footerbar'>
            <div className='footerbar-country'>
                <span>Brasil</span>
            </div>
            <div className='footerbar-links'>
                <ul id='footerbar-link-google'>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Publicidade</a>
                    </li>
                    <li>
                        <a href="#">Negócios</a>
                    </li>
                    <li>
                        <a href="#">Como funciona a Pesquisa</a>
                    </li>
                </ul>
                <ul id='footerbar-link-user'>
                    <li>
                        <a href="#">Privacidade</a>
                    </li>
                    <li>
                        <a href="#">Termos</a>
                    </li>
                    <li>
                        <a href="#">Configurações</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer